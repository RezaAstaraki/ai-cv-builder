import { PersonalInfoType } from "@/redux/features/types";

function SummeryPreview({ personalInfo }: { personalInfo: PersonalInfoType }) {
  return (
    personalInfo?.summery && (
      <div
        dangerouslySetInnerHTML={{ __html: personalInfo?.summery }}
        className="text-xs rsw-ce rsw-ce"
      ></div>
    )
  );
}

export default SummeryPreview;
