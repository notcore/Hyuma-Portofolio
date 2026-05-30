import TagTitle from "@/components/ui/TagTitle";
import { TextAnimate } from "@/components/ui/text-animate";
import Title from "@/components/ui/Title";
import { Mail, Phone, Github, Globe, MessageSquare } from "lucide-react"; 

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      value: "davaelyanta@gmail.com",
      href: "mailto:davaelyanta@gmail.com",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "WhatsApp",
      value: "hubungi melalui whatsapp",
      href: "https://wa.me/6281215997620",
      icon: <Phone className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 mb-20">
    <TagTitle title="Home" bagian="Contact" color="blue" />
      <Title className="font-minecraft">Contact Me</Title>

      <div className="text-justify grid grid-cols-1 text-md mb-15">
        <TextAnimate animation="blurIn" by="word">
          Kontak yang dapat dihubungi
        </TextAnimate>
      </div>

      {/* Menu List Contact */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-sm border border-neutral-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-600 hover:shadow-sm group"
          >
            <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
              {contact.icon}
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                {contact.name}
              </span>
              <span className="text-sm font-semibold text-neutral-700 truncate group-hover:text-blue-600 transition-colors">
                {contact.value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;