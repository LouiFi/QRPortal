import { Imgs } from '../view-navigation/vn-constants';

export const SECTIONSQUERY = 'aip/web-navigation';
export const QUERYFAILED = {
  value: 'ERROR: Failed to retrieve navigation data, please try again later.',
  href: '#'
};

export const CLASSES = {
  container: 'qrp_lpCntr',
  iconContainer: 'qrp_lpiCntr',
  welcomeText: 'qrp_lpwtxtCntr',
  navigation: 'qrp_lpnav',
  link: 'qrp_lpslink',
  separator: 'qrp_lpSsep'
};

export const _oIconStyle = {
  backgroundImage: 'url(' + Imgs.logo.default + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '80%'
};

export const WELCOMETEXT = "Welcome to the CAST Structural Rules Portal, let's start browsing or searching the rules";