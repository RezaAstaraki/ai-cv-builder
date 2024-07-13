import { useAppSelector } from "@/redux/store";

function SummeryPreview({}) {
  const personalInfo = useAppSelector((state) => state.resume.personalInfo);

  return <p className="text-xs">{personalInfo?.summery}</p>;
}

export default SummeryPreview;
