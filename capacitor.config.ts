import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.frontend_sha',
  appName: 'IOT Lamps',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
