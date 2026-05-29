import { TextAnimate } from "@/components/ui/text-animate";
import Title from "@/components/ui/Title";

const AboutMe = () => {
  return (
    <div className=" grid grid-cols-1 gap-6 py-4">
      <Title className="font-minecraft">Introduce</Title>
      <div className="text-justify grid grid-cols-1 text-md">
        <TextAnimate animation="blurIn" by="word">
          saya Dava Elyanta, lulusan
        </TextAnimate>

        <div className="text-blue-600">
          <TextAnimate animation="blurIn" by="word">
            SMK jurusan Teknik Jaringan Komputer
          </TextAnimate>
        </div>

        <TextAnimate animation="blurIn" by="word">
          saya telah belajar dasar-dasar Networking
        </TextAnimate>
        <TextAnimate animation="blurIn" by="word">
          Progaming serta proses bisnis kewirausahaan.
        </TextAnimate>
      </div>
    </div>
  );
};

export default AboutMe;
