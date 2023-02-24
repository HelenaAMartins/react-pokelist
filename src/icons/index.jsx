export const ArrowDown = () => (
  <svg viewBox="0 0 320 512" fill="#fff" width={15} height={15}>
    <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
  </svg>
);

export const Load = () => (
  <svg width={120} height={30} fill="#fff">
    <circle cx={15} cy={15} r={15}>
      <animate
        attributeName="r"
        from={15}
        to={15}
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from={1}
        to={1}
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={60} cy={15} r={9} fillOpacity={0.3}>
      <animate
        attributeName="r"
        from={9}
        to={9}
        begin="0s"
        dur="0.8s"
        values="9;15;9"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from={0.5}
        to={0.5}
        begin="0s"
        dur="0.8s"
        values=".5;1;.5"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={105} cy={15} r={15}>
      <animate
        attributeName="r"
        from={15}
        to={15}
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from={1}
        to={1}
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);
