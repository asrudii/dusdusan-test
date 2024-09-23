"use client";

import { cn } from "@/core/utils/class-merge";
import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style.scoped.scss";

interface ILabelSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  titleIcon?: string;
  rightCtaTitle?: string;
  rightCtaUrl?: string;
}

const LabelSection = (props: ILabelSectionProps): JSX.Element => {
  const { title, rightCtaTitle, rightCtaUrl, className, titleIcon } = props;
  const { push } = useRouter();

  const handleShowAll = () => {
    push(rightCtaUrl || "/");
  };

  return (
    <div className={cn("bar", className)}>
      <div className="title-wrapper">
        {titleIcon && (
          <Image src={titleIcon} alt="label-bar" width={22} height={22} />
        )}
        <span>{title}</span>
      </div>
      {rightCtaTitle && (
        <Button
          onClick={handleShowAll}
          type="primary"
          size="small"
          icon={<RightOutlined size={8} />}
          iconPosition="end"
        >
          <span className="text-[10px]">{rightCtaTitle}</span>
        </Button>
      )}
    </div>
  );
};

export default LabelSection;
