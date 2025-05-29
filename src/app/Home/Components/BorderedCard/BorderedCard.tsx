import Button from "@/app/components/Button/Button";
import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

export interface BorderedCardProps {
  title?: string;
  content?: string;
  imageUrl?: string | StaticImageData;
  onClick?: () => void;
}

const BorderedCard = ({
  title,
  content,
  imageUrl,
  onClick,
}: BorderedCardProps) => {
  return (
    <div className="flex flex-col p-4 gap-4 border border-blue-700 rounded-lg">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`card-image-${title}`}
          className="rounded-xl"
        />
      )}
      <h2 className="text-lg font-semibold text-french-white">{title}</h2>
      <p className="text-sm text-french-white">{content}</p>
      {onClick && (
        <div className="flex flex-1 justify-end items-end">
          <Button label={"Saiba mais"} type="SECONDARY" onClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default BorderedCard;
