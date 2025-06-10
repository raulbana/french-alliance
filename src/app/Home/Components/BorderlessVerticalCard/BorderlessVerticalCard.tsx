"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface BorderlessVerticalCardProps {
  title: string;
  content: string;
  imageUrl?: string | StaticImageData;
  onClick?: () => void;
}

const BorderlessVerticalCard = ({
  title,
  content,
  imageUrl,
  onClick,
}: BorderlessVerticalCardProps) => {
  return (
    <div
      className="flex flex-col p-4 gap-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      {imageUrl && (
        <div className="flex justify-center items-center rounded-lg overflow-hidden w-full max-h-48">
          <Image src={imageUrl} alt={title} className="rounded-xl" />
        </div>
      )}
      <h2 className="text-lg font-semibold text-french-blue">{title}</h2>
      <p className="text-sm text-french-blue text-balance">{content}</p>
    </div>
  );
};

export default BorderlessVerticalCard;
