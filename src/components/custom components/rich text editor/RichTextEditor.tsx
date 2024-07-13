"use client";

import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnNumberedList,
  BtnRedo,
  BtnUnderline,
  BtnUndo,
  ContentEditableEvent,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";

const RichTextEditor = ({
  onRichTextChange,
  initialValue,
  label,
}: {
  onRichTextChange: (e: ContentEditableEvent) => void;
  label?: string;
  initialValue: string;
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <div className="flex justify-between items-end">
        <label>{label}</label>
        <Button
          variant="outline"
          // onClick={() => GenerateSummeryFromAI()}
          type="button"
          size="sm"
          className="border-primary text-primary flex gap-2"
        >
          <Brain className="h-4 w-4" /> Generate from AI
        </Button>
      </div>
      <div className="mt-1">
        <EditorProvider>
          <Editor
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              onRichTextChange(e);
            }}
          >
            <Toolbar>
              <BtnUndo />
              <BtnRedo />
              <Separator />
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <Separator />
              <BtnNumberedList />
              <BtnBulletList />
            </Toolbar>
          </Editor>
        </EditorProvider>
      </div>
    </div>
  );
};

export default RichTextEditor;
