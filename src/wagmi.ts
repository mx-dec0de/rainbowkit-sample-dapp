import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {

  polygon,

} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: "c09195e9de8d63a40ec97d627cfd633c",
  chains: [
    polygon
  ],
  ssr: true,
});