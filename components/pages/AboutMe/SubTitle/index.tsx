import { TextAnimate } from "@/components/ui/text-animate";

const SubTitle = () => {
  return (
    <div className="sm:text-2xl text-xl">
      <TextAnimate animation="blurIn" by="word">
        Hai nama aku Dava Elyanta, aku dari
      </TextAnimate>

      <div className="text-blue-600">
        <TextAnimate animation="blurIn" by="word">
          jurusan Teknik Jaringan Komputer
        </TextAnimate>
      </div>

      <TextAnimate animation="blurIn" by="word">
        aku telah belajar dasar-dasar Networking dan Programming
      </TextAnimate>
    </div>
  );
};

export default SubTitle;
