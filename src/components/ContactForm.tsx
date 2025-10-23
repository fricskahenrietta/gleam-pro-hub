import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import officeFormBg from "@/assets/office-form-bg.jpg";

const ContactForm = () => {
  const { toast } = useToast();
  const [formProgress, setFormProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    size: "",
    frequency: "",
    startDate: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Calculate form progress
    const filledFields = Object.values({ ...formData, [field]: value }).filter(
      (val) => val !== ""
    ).length;
    const totalFields = Object.keys(formData).length;
    setFormProgress((filledFields / totalFields) * 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Köszönjük az érdeklődést!",
      description: "Hamarosan felvesszük Önnel a kapcsolatot.",
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image with Opacity Based on Progress */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${officeFormBg})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: formProgress / 200,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lépj Velünk Kapcsolatba
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Töltse ki az alábbi űrlapot és munkatársunk 24 órán belül felveszi Önnel a kapcsolatot.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card/95 backdrop-blur-sm p-8 rounded-xl shadow-strong">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Név *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefonszám *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email cím *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="company">Cég neve *</Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Iroda címe *</Label>
              <Input
                id="address"
                required
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="size">Iroda nagysága (m²) *</Label>
                <Input
                  id="size"
                  type="number"
                  required
                  value={formData.size}
                  onChange={(e) => handleInputChange("size", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="frequency">Rendszeresség *</Label>
                <Select
                  value={formData.frequency}
                  onValueChange={(value) => handleInputChange("frequency", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Válasszon..." />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="daily">Napi</SelectItem>
                    <SelectItem value="weekly">Heti</SelectItem>
                    <SelectItem value="biweekly">Kéthetente</SelectItem>
                    <SelectItem value="monthly">Havi</SelectItem>
                    <SelectItem value="oneoff">Egyszeri</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

              <div>
                <Label htmlFor="startDate">Legkorábbi kezdés *</Label>
                <Select
                  value={formData.startDate}
                  onValueChange={(value) => handleInputChange("startDate", value)}
                  required
                >
                  <SelectTrigger id="startDate">
                    <SelectValue placeholder="Válasszon időpontot..." />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {Array.from({ length: 7 }, (_, i) => 16 + i).map((hour) => (
                      <SelectItem key={hour} value={`${hour}:00`}>
                        {`${hour}:00`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Ajánlat Kérése
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
