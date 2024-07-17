import React from "react";

import EducationalPreview from "@/components/preview/EducationalPreview";
import ExperiencePreview from "@/components/preview/ExperiencePreview";
import PersonalDetailPreview from "@/components/preview/PersonalDetailPreview";
import SkillsPreview from "@/components/preview/SkillsPreview";
import SummeryPreview from "@/components/preview/SummeryPreview";
import { getFormattedData } from "@/lib/utils";
import {
  Document,
  StyleSheet,
  View,
  Page,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
});

const ResumeDocument = ({ resume }: { resume: any }) => {
  const themeColor = resume.personalInfo.themeColor;

  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <PersonalDetailPreview personalInfo={resume.personalInfo} />
          </View>
          <View style={styles.section}>
            <SummeryPreview personalInfo={resume.personalInfo} />
          </View>
          {resume.experiences.length > 0 && (
            <View style={styles.section}>
              <ExperiencePreview
                experienceList={resume.experiences}
                themeColor={themeColor}
              />
            </View>
          )}
          {resume.education.length > 0 && (
            <View style={styles.section}>
              <EducationalPreview
                eductionList={resume.education}
                themeColor={String(themeColor)}
              />
            </View>
          )}
          {resume.skill.length > 0 && (
            <View style={styles.section}>
              <SkillsPreview
                skillList={resume.skill}
                themeColor={String(themeColor)}
              />
            </View>
          )}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ResumeDocument;
