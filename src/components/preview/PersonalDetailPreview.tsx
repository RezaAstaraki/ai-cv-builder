import { capitalizeFirstLetter, capitalizeFirstLetterWord } from "@/lib/utils";
import { PersonalInfoType } from "@/redux/features/types";

function PersonalDetailPreview({
  personalInfo,
}: {
  personalInfo: PersonalInfoType;
}) {
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: personalInfo?.themeColor,
        }}
      >
        {capitalizeFirstLetter(personalInfo?.firstName)}{" "}
        {capitalizeFirstLetter(personalInfo?.lastName)}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {capitalizeFirstLetterWord(personalInfo?.jobTitle)}
      </h2>
      <h2
        className="text-center font-normal text-xs"
        style={{
          color: personalInfo?.themeColor,
        }}
      >
        {personalInfo?.address}
      </h2>

      <div className="flex justify-between">
        <h2
          className="font-normal text-xs"
          style={{
            color: personalInfo?.themeColor,
          }}
        >
          {personalInfo?.phone}
        </h2>
        <h2
          className="font-normal text-xs"
          style={{
            color: personalInfo?.themeColor,
          }}
        >
          {personalInfo?.email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: personalInfo?.themeColor,
        }}
      />
    </div>
  );
}

export default PersonalDetailPreview;
