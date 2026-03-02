import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, Image as ImageIcon, X } from "lucide-react";

export default function UploadPhotos() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploaderName, setUploaderName] = useState("");
  const [caption, setCaption] = useState("");
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [results, setResults] = useState<{name: string, success: boolean, error?: string}[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles = selectedFiles.filter(file => {
        if (!ALLOWED_TYPES.includes(file.type)) {
          alert(`File ${file.name} is not a valid image (JPG, PNG, WEBP only).`);
          return false;
        }
        if (file.size > MAX_FILE_SIZE) {
          alert(`File ${file.name} is too large (Max 5MB).`);
          return false;
        }
        return true;
      });
      setFiles(prev => [...prev, ...validFiles]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) return;

    setStatus("uploading");
    setResults([]);

    const uploadResults = [];

    for (const file of files) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const filePath = `uploads/${fileName}`;

        // 1. Upload to Storage
        const { error: uploadError } = await supabase.storage
          .from('gallery-photos')
          .upload(filePath, file, { upsert: false });

        if (uploadError) {
          console.error(`Storage upload error for ${file.name}:`, uploadError);
          uploadResults.push({ name: file.name, success: false, error: uploadError.message });
          continue;
        }

        // 2. Get Public URL
        const { data: { publicUrl } } = supabase.storage
          .from('gallery-photos')
          .getPublicUrl(filePath);

        // 3. Insert Database Row
        const { error: dbError } = await supabase
          .from('gallery_photos')
          .insert([
            {
              uploader_name: uploaderName || null,
              caption: caption || null,
              storage_path: filePath,
              public_url: publicUrl,
              status: 'PENDING'
            }
          ]);

        if (dbError) {
          console.error(`Database insert error for ${file.name}:`, dbError);
          uploadResults.push({ name: file.name, success: false, error: dbError.message });
        } else {
          uploadResults.push({ name: file.name, success: true });
        }
      } catch (err: any) {
        console.error(`Unexpected error processing ${file.name}:`, err);
        uploadResults.push({ name: file.name, success: false, error: err.message || "Unknown error" });
      }
    }

    setResults(uploadResults);
    
    if (uploadResults.every(r => r.success)) {
      setStatus("success");
      setFiles([]);
      setCaption("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl relative z-10">
      <div className="text-center mb-10 relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-6">
          <UploadCloud className="w-4 h-4" />
          Submit Memories
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Upload Photos</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Share your best shots from the trip. All photos will be reviewed before appearing on the public gallery wall.
        </p>
      </div>

      <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2rem] relative z-30">
        <div className="h-3 bg-primary w-full"></div>
        <CardHeader className="bg-muted/10 border-b border-border p-8">
          <CardTitle className="text-2xl font-serif text-primary">Photo Submission</CardTitle>
          <CardDescription className="text-base">
            Upload up to 5MB per photo. JPG, PNG, WEBP allowed.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          {status === "success" && results.length > 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="w-20 h-20 text-secondary mb-6" />
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Photos Submitted!</h3>
              <p className="text-lg text-muted-foreground mb-8">They are pending review and will appear on the gallery wall soon.</p>
              <Button 
                onClick={() => { setStatus("idle"); setResults([]); }} 
                variant="outline" 
                className="uppercase tracking-widest font-bold"
              >
                Upload More
              </Button>
            </div>
          ) : (
            <form onSubmit={handleUpload} className="space-y-8">
              
              {status === "error" && results.length > 0 && (
                <div className="p-5 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 font-bold mb-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    Some uploads failed:
                  </div>
                  <ul className="list-disc pl-6 text-sm">
                    {results.filter(r => !r.success).map((res, i) => (
                      <li key={i}>{res.name}: {res.error}</li>
                    ))}
                  </ul>
                  {results.some(r => r.success) && (
                    <p className="text-sm font-bold text-secondary mt-3">
                      {results.filter(r => r.success).length} photos uploaded successfully.
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-widest">Your Name (Optional)</label>
                <input 
                  type="text" 
                  value={uploaderName}
                  onChange={(e) => setUploaderName(e.target.value)}
                  className="w-full p-4 text-base rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                  placeholder="Who took these?" 
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-widest">Caption / Context (Optional)</label>
                <input 
                  type="text" 
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full p-4 text-base rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                  placeholder="Where/what is this?" 
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-widest">Select Photos</label>
                
                <div 
                  className="border-2 border-dashed border-primary/30 rounded-2xl p-10 text-center cursor-pointer hover:bg-primary/5 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <UploadCloud className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                  <p className="font-bold text-primary text-lg mb-2">Click to browse files</p>
                  <p className="text-sm text-muted-foreground">Or drag and drop them here</p>
                  <input 
                    type="file" 
                    multiple 
                    accept=".jpg,.jpeg,.png,.webp"
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-bold text-foreground/70">{files.length} file(s) selected:</p>
                    <ul className="space-y-2">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
                          <div className="flex items-center gap-3 truncate">
                            <ImageIcon className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm truncate font-medium">{file.name}</span>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => removeFile(index)}
                            className="p-1 hover:bg-destructive/10 text-destructive rounded-md transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={status === "uploading" || files.length === 0}
                className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest mt-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "uploading" ? (
                  <>Uploading {files.length} file(s)... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                  <>Upload to Gallery <UploadCloud className="w-5 h-5" /></>
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
