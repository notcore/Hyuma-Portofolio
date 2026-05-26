import { TextAnimate } from "@/components/ui/text-animate";
import Title from "@/components/ui/Title";

const SubTitle = () => {
  return (
    <div className="sm:text-xl grid grid-cols-1 gap-6 py-4">
      <Title className="font-minecraft">Introduce</Title>
      <div className="text-justify grid grid-cols-1 text-md">
        <TextAnimate animation="blurIn" by="word">
          Hai nama aku Dava Elyanta, aku dari
        </TextAnimate>

        <div className="text-blue-600">
          <TextAnimate animation="blurIn" by="word">
            SMK jurusan Teknik Jaringan Komputer
          </TextAnimate>
        </div>

        <TextAnimate animation="blurIn" by="word">
          aku telah belajar dasar-dasar Networking
        </TextAnimate>
        <TextAnimate animation="blurIn" by="word">
          Progaming dan software office
        </TextAnimate>
      </div>
    </div>
  );
};

export default SubTitle;
