import useAboutContent from "../../hooks/useAboutContent";
import Card from "../Card/Card";

const MissionVisionSection = () => {
  const { missionText, visionText } = useAboutContent();
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-6 mb-8">
      <Card title="Missão">{missionText}</Card>
      <Card title="Visão">{visionText}</Card>
    </div>
  );
};

export default MissionVisionSection;
