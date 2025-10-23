import ReusableForm from "./ReusableForm";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lépj Velünk Kapcsolatba
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Töltse ki az alábbi űrlapot és munkatársunk 24 órán belül felveszi Önnel a kapcsolatot.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
           <div className="bg-card p-8 rounded-xl shadow-soft">
                <ReusableForm />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
