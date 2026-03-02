import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ShieldCheck, Image as ImageIcon, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Photo = {
  id: string;
  public_url: string;
  uploader_name: string;
  caption: string;
  created_at: string;
};

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const { data, error } = await supabase
          .from("gallery_photos")
          .select("*")
          .eq("status", "APPROVED")
          .order("created_at", { ascending: false });

        if (error) throw error;
        
        setPhotos(data || []);
      } catch (err: any) {
        console.error("Error fetching photos:", err);
        setError("Failed to load photos. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl relative z-10">
      <div className="text-center mb-16 relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-6">
          <ImageIcon className="w-4 h-4" />
          Memories
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Event Gallery</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          The official photo wall for the 1st Annual Ramstein Ryder Cup.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
          <p className="text-lg font-medium text-muted-foreground">Loading gallery...</p>
        </div>
      ) : error ? (
        <div className="text-center py-20 text-destructive font-medium text-lg">
          {error}
        </div>
      ) : photos.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <ImageIcon className="w-10 h-10 text-muted-foreground/50" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-primary mb-4">No approved photos yet.</h3>
          <p className="text-muted-foreground text-lg">Check back later or upload your own moments!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden border-none shadow-xl rounded-2xl bg-white group">
              <div className="relative aspect-square overflow-hidden bg-muted/20">
                <img 
                  src={photo.public_url} 
                  alt={photo.caption || "Event photo"} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {(photo.caption || photo.uploader_name) && (
                <CardContent className="p-6">
                  {photo.caption && (
                    <p className="text-foreground/90 font-medium mb-2 line-clamp-2">{photo.caption}</p>
                  )}
                  {photo.uploader_name && (
                    <p className="text-sm font-bold text-secondary uppercase tracking-wider">
                      By {photo.uploader_name}
                    </p>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
