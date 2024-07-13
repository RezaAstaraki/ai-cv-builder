import { PersonalInfoType } from "@/redux/features/types";

function SummeryPreview({ personalInfo }: { personalInfo: PersonalInfoType }) {
  return <p className="text-xs">{personalInfo?.summery}</p>;
}

export default SummeryPreview;
