import { ComponentPropsWithoutRef } from "react";

type SvgProps = ComponentPropsWithoutRef<"svg">;

const Icons = {
  codeceleste: (props: SvgProps) => (
    <svg
      width="142"
      height="142"
      viewBox="0 0 142 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_2007_14)">
        <rect
          width="142"
          height="142"
          rx="34"
          fill="url(#paint0_linear_2007_14)"
        />
        <g filter="url(#filter0_f_2007_14)">
          <circle cx="71" cy="76" r="40" fill="#201DFF" fill-opacity="0.46" />
        </g>
        <path
          d="M70.0519 52.5876C70.1395 52.4111 70.2749 52.2627 70.4428 52.1588C70.6106 52.055 70.8042 52 71.0018 52C71.1994 52 71.393 52.055 71.5608 52.1588C71.7287 52.2627 71.8641 52.4111 71.9517 52.5876L76.5713 61.9102C76.8756 62.5238 77.3249 63.0547 77.8804 63.4572C78.436 63.8598 79.0813 64.122 79.761 64.2214L90.0921 65.7277C90.2878 65.756 90.4717 65.8382 90.623 65.9652C90.7743 66.0922 90.8869 66.2588 90.948 66.4462C91.0092 66.6336 91.0165 66.8343 90.9692 67.0257C90.9218 67.217 90.8216 67.3913 90.68 67.5289L83.2087 74.7774C82.716 75.2558 82.3473 75.8463 82.1345 76.4981C81.9216 77.1499 81.8709 77.8435 81.9868 78.5192L83.7506 88.7604C83.7852 88.9553 83.7641 89.156 83.6897 89.3395C83.6152 89.5231 83.4905 89.6821 83.3298 89.7984C83.169 89.9147 82.9787 89.9837 82.7805 89.9975C82.5823 90.0112 82.3842 89.9691 82.2088 89.8761L72.9736 85.0385C72.3651 84.7201 71.6881 84.5538 71.0008 84.5538C70.3135 84.5538 69.6365 84.7201 69.028 85.0385L59.7948 89.8761C59.6195 89.9686 59.4216 90.0102 59.2238 89.9962C59.0259 89.9822 58.8359 89.9131 58.6755 89.7969C58.5151 89.6806 58.3906 89.5218 58.3163 89.3386C58.2419 89.1554 58.2207 88.955 58.2549 88.7604L60.0168 78.5212C60.1332 77.8452 60.0827 77.1512 59.8699 76.499C59.657 75.8467 59.2881 75.2559 58.7949 74.7774L51.3236 67.5309C51.1808 67.3935 51.0796 67.2189 51.0315 67.0269C50.9835 66.835 50.9905 66.6335 51.0518 66.4454C51.113 66.2572 51.2261 66.09 51.3781 65.9628C51.5301 65.8356 51.7149 65.7534 51.9115 65.7257L62.2406 64.2214C62.921 64.1228 63.5672 63.8609 64.1236 63.4583C64.6799 63.0557 65.1297 62.5244 65.4343 61.9102L70.0519 52.5876Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M109.889 37H32.1111C25.9746 37 21 42.0741 21 48.3333V93.6667C21 99.9259 25.9746 105 32.1111 105H109.889C116.025 105 121 99.9259 121 93.6667V48.3333C121 42.0741 116.025 37 109.889 37Z"
          stroke="white"
          stroke-width="4.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 116H121"
          stroke="white"
          stroke-width="4.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <rect
        x="2.5"
        y="2.5"
        width="137"
        height="137"
        rx="31.5"
        stroke="url(#paint1_linear_2007_14)"
        stroke-width="5"
        style={{ mixBlendMode: "difference" }}
      />
      <defs>
        <filter
          id="filter0_f_2007_14"
          x="-19"
          y="-14"
          width="180"
          height="180"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="25"
            result="effect1_foregroundBlur_2007_14"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2007_14"
          x1="142"
          y1="0"
          x2="0"
          y2="142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0C0D0E" />
          <stop offset="1" stop-color="#222222" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2007_14"
          x1="142"
          y1="142"
          x2="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#733DE4" />
          <stop offset="1" stop-color="#C0B6FF" />
        </linearGradient>
        <clipPath id="clip0_2007_14">
          <rect width="142" height="142" rx="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};

type IconName = keyof typeof Icons;

export type CustomIconProps = {
  name: IconName;
  size?: number;
} & SvgProps;

export const CustomIcon = ({ name, size, ...props }: CustomIconProps) => {
  const Icon = Icons[name];
  return <Icon width={size} height={size} {...props} />;
};
