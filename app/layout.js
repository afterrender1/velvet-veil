import Footer from "./components/Footer";
import "./globals.css";




export const metadata = {
  title: "Velvet Veil - Beauty and Skincare salon",
  description: "Velvet Veil is a beauty and skincare salon that offers a wide range of services to help you look and feel your best. Our team of experienced professionals is dedicated to providing personalized care and attention to each of our clients. Whether you're looking for a relaxing facial, a rejuvenating massage, or a stylish haircut, we have something for everyone. Visit us today and experience the ultimate in beauty and skincare services.  ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressContentEditableWarning={true}
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Footer/>
      </body>
    </html>
  );
}
