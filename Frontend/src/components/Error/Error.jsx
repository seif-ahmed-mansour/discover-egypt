import Places from '../Home/Places';
import "./Error.css";
import { useLanguage } from "../../context/LanguageContext";


function Error() {
  const { language } = useLanguage();

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center error">
        <div className='text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g id="freepik--background-simple--inject-37"><path d="M451.67,117q-2.52-4.2-5.25-8.22c-24.28-35.67-64.69-60.09-104-71.15a224,224,0,0,0-52.51-8c-115.68-4.2-158.18,91.17-195.45,115.77S0,211.91,7.21,300.15c5.44,67.09,43.61,131.24,113.31,160.43a197.16,197.16,0,0,0,24.19,8.35,230.64,230.64,0,0,0,51.09,7.85c52.7,2.35,95.49-10.35,137.35-42.34,9.73-7.44,19.41-15.83,32-16.75,9.18-.66,17.88,2.63,8.29,11.5-11.28,10.43,1.73,30.93,30.35,16.69,47.81-23.8,67.47-75.13,76.73-127.32C491.93,254.49,486.41,174.81,451.67,117Z" style={{ fill: '#087E8C' }} /><path d="M451.67,117q-2.52-4.2-5.25-8.22c-24.28-35.67-64.69-60.09-104-71.15a224,224,0,0,0-52.51-8c-115.68-4.2-158.18,91.17-195.45,115.77S0,211.91,7.21,300.15c5.44,67.09,43.61,131.24,113.31,160.43a197.16,197.16,0,0,0,24.19,8.35,230.64,230.64,0,0,0,51.09,7.85c52.7,2.35,95.49-10.35,137.35-42.34,9.73-7.44,19.41-15.83,32-16.75,9.18-.66,17.88,2.63,8.29,11.5-11.28,10.43,1.73,30.93,30.35,16.69,47.81-23.8,67.47-75.13,76.73-127.32C491.93,254.49,486.41,174.81,451.67,117Z" style={{ fill: '#fff', opacity: '0.7000000000000001' }} /></g><g id="freepik--Space--inject-37"><path d="M206.19,460.54c-3.7,0-7.53-.09-11.38-.26A215.63,215.63,0,0,1,147.29,453a181.09,181.09,0,0,1-22-7.6C66.6,420.84,28.38,366.5,23,300,20.2,265.8,27.78,237,46.15,212c15.51-21.14,36.19-36.28,56.22-49.5,13.07-8.62,24.73-21.68,38.24-36.79,31.75-35.53,71.27-79.75,143.52-79.75,2.21,0,4.48,0,6.73.12a207.59,207.59,0,0,1,48.62,7.42c39.15,11,74.26,34.86,93.93,63.77,1.57,2.31,3.15,4.77,4.68,7.32,34.67,57.73,36.58,137.15,26.8,192.23-9.68,54.57-27.59,89.35-56,108.2a30.43,30.43,0,0,0-1.63-6c-5-12.79-18-20.43-34.68-20.43-1.4,0-2.83.05-4.25.16-19.79,1.44-34.16,12.55-44.65,20.67L321,421.46C285.67,448.49,250.25,460.54,206.19,460.54Z" style={{ fill: '#263238' }} /></g><g id="freepik--Stars--inject-37"><circle cx="362.53" cy="100.87" r="4.69" style={{ fill: '#b2b2b2' }} /><circle cx="441.07" cy="180.24" r="4.69" style={{ fill: '#b2b2b2' }} /><circle cx="116.79" cy="402.6" r="4.69" style={{ fill: '#b2b2b2' }} /><circle cx="402.48" cy="398.53" r="4.69" style={{ fill: '#b2b2b2' }} /><path d="M248.49,60a2.68,2.68,0,1,1-2.68-2.68A2.68,2.68,0,0,1,248.49,60Z" style={{ fill: '#b2b2b2' }} /><circle cx={62} cy="221.83" r="4.69" style={{ fill: '#b2b2b2' }} /><circle cx="400.24" cy="104.37" r="2.33" style={{ fill: '#b2b2b2' }} /><circle cx="86.94" cy="371.26" r="2.33" style={{ fill: '#087E8C' }} /><circle cx="430.61" cy="352.08" r="2.33" style={{ fill: '#087E8C' }} /><path d="M216.25,416.32a2.33,2.33,0,1,1-2.33-2.32A2.33,2.33,0,0,1,216.25,416.32Z" style={{ fill: '#087E8C' }} /><path d="M97,334.17a2.33,2.33,0,1,1-2.33-2.33A2.34,2.34,0,0,1,97,334.17Z" style={{ fill: '#b2b2b2' }} /><path d="M193.36,445.78a2.33,2.33,0,1,1-2.33-2.33A2.32,2.32,0,0,1,193.36,445.78Z" style={{ fill: '#b2b2b2' }} /><path d="M327.41,70.68a2.33,2.33,0,1,1-2.33-2.33A2.33,2.33,0,0,1,327.41,70.68Z" style={{ fill: '#087E8C' }} /><path d="M331.43,325.22a2.33,2.33,0,1,1-2.33-2.33A2.32,2.32,0,0,1,331.43,325.22Z" style={{ fill: '#b2b2b2' }} /><path d="M438.32,234.73A2.33,2.33,0,1,1,436,232.4,2.33,2.33,0,0,1,438.32,234.73Z" style={{ fill: '#b2b2b2' }} /><circle cx="57.33" cy="323.94" r="2.33" style={{ fill: '#087E8C' }} /><circle cx="264.74" cy="429.46" r="2.33" style={{ fill: '#b2b2b2' }} /><circle cx="180.32" cy="338.65" r="2.33" style={{ fill: '#087E8C' }} /><path d="M335.49,150.62a2.33,2.33,0,1,1-2.32-2.33A2.32,2.32,0,0,1,335.49,150.62Z" style={{ fill: '#087E8C' }} /></g><g id="freepik--Text--inject-37"><path d="M137.66,393.7v-40h14.47v2.91H141.46v15h8.7v2.77h-8.7v16.49h10.77v2.82Z" style={{ fill: '#b2b2b2' }} /><path d="M157.37,393.7v-40h9a12,12,0,0,1,5.9,1.21,6.91,6.91,0,0,1,3.08,3.51,14.3,14.3,0,0,1,.94,5.46,17.13,17.13,0,0,1-.49,4.19,8.07,8.07,0,0,1-1.68,3.36,5.82,5.82,0,0,1-3.36,1.83l6.13,20.45h-3.66L167.39,374h-6.27V393.7Zm3.75-22.43h5.09a7.53,7.53,0,0,0,3.9-.84,4.61,4.61,0,0,0,2-2.47,11.93,11.93,0,0,0,.6-4.09,9.66,9.66,0,0,0-1.29-5.54c-.85-1.21-2.55-1.82-5.08-1.82h-5.19Z" style={{ fill: '#b2b2b2' }} /><path d="M182.65,393.7v-40h9a12.11,12.11,0,0,1,5.91,1.21,6.91,6.91,0,0,1,3.08,3.51,14.3,14.3,0,0,1,.94,5.46,17.13,17.13,0,0,1-.49,4.19,8.07,8.07,0,0,1-1.68,3.36,5.82,5.82,0,0,1-3.36,1.83l6.12,20.45h-3.65L192.68,374h-6.27V393.7Zm3.76-22.43h5.09a7.56,7.56,0,0,0,3.9-.84,4.61,4.61,0,0,0,2-2.47,11.93,11.93,0,0,0,.6-4.09,9.66,9.66,0,0,0-1.29-5.54c-.86-1.21-2.55-1.82-5.09-1.82h-5.18Z" style={{ fill: '#b2b2b2' }} /><path d="M217.38,394.19a10.81,10.81,0,0,1-6.2-1.55,8.24,8.24,0,0,1-3.16-4.35,20.5,20.5,0,0,1-.92-6.4V365.3a18.67,18.67,0,0,1,1-6.35,8.11,8.11,0,0,1,3.21-4.17,13.39,13.39,0,0,1,12.24,0,8,8,0,0,1,3.19,4.17,19.22,19.22,0,0,1,.94,6.35v16.64a20.52,20.52,0,0,1-.91,6.37,8.3,8.3,0,0,1-3.14,4.33A10.79,10.79,0,0,1,217.38,394.19Zm0-3a6.58,6.58,0,0,0,4.05-1.06,5.44,5.44,0,0,0,1.9-3,17.08,17.08,0,0,0,.52-4.42V364.61a16.86,16.86,0,0,0-.52-4.4,5.19,5.19,0,0,0-1.9-2.89,8.58,8.58,0,0,0-8.08,0,5.13,5.13,0,0,0-1.93,2.89,16.89,16.89,0,0,0-.51,4.4v18.12a17.1,17.1,0,0,0,.51,4.42,5.37,5.37,0,0,0,1.93,3A6.58,6.58,0,0,0,217.38,391.18Z" style={{ fill: '#b2b2b2' }} /><path d="M233.87,393.7v-40h9a12,12,0,0,1,5.9,1.21,7,7,0,0,1,3.09,3.51,14.5,14.5,0,0,1,.94,5.46,17.63,17.63,0,0,1-.49,4.19,8.19,8.19,0,0,1-1.68,3.36,5.85,5.85,0,0,1-3.36,1.83l6.12,20.45h-3.65L243.9,374h-6.27V393.7Zm3.76-22.43h5.08a7.53,7.53,0,0,0,3.9-.84,4.62,4.62,0,0,0,2-2.47,12,12,0,0,0,.59-4.09,9.67,9.67,0,0,0-1.28-5.54c-.86-1.21-2.55-1.82-5.09-1.82h-5.18Z" style={{ fill: '#b2b2b2' }} /><path d="M269.24,393.7v-40h9.58a10.35,10.35,0,0,1,5.65,1.33,7.38,7.38,0,0,1,2.94,3.71,15.93,15.93,0,0,1,.89,5.58,14.48,14.48,0,0,1-.91,5.21,8,8,0,0,1-3,3.83,9.61,9.61,0,0,1-5.5,1.43H273V393.7ZM273,372h4.79a9.2,9.2,0,0,0,3.93-.72,4.44,4.44,0,0,0,2.2-2.4,12.17,12.17,0,0,0,.69-4.54,15,15,0,0,0-.6-4.77,3.87,3.87,0,0,0-2.05-2.37,10.25,10.25,0,0,0-4.12-.66H273Z" style={{ fill: '#b2b2b2' }} /><path d="M288.89,393.7l8.45-40h4l8.5,40h-3.71l-2-10.72h-9.54l-2,10.72Zm6.23-13.44h8.49l-4.3-21.58Z" style={{ fill: '#b2b2b2' }} /><path d="M323.57,394.24a9.83,9.83,0,0,1-5.91-1.58,8.39,8.39,0,0,1-3-4.47,22.58,22.58,0,0,1-.89-6.69V365.89a23.08,23.08,0,0,1,.86-6.67,8.15,8.15,0,0,1,3.06-4.37,13.05,13.05,0,0,1,11.91-.22,7.54,7.54,0,0,1,3,3.9,18.5,18.5,0,0,1,.93,6.27v1.39H330V364.8a18.39,18.39,0,0,0-.52-4.74,5,5,0,0,0-1.8-2.81,6.41,6.41,0,0,0-3.81-.94,6.17,6.17,0,0,0-4.1,1.18,5.62,5.62,0,0,0-1.8,3.26,24.14,24.14,0,0,0-.42,4.74v16.45a20.55,20.55,0,0,0,.52,5,5.54,5.54,0,0,0,1.93,3.16,6.32,6.32,0,0,0,4,1.09,5.25,5.25,0,0,0,5.73-4.3,20.24,20.24,0,0,0,.54-5v-4.69h-5.92v-2.81h9.38V393.7h-2.42l-.44-4.55a7.64,7.64,0,0,1-2.45,3.71A7.45,7.45,0,0,1,323.57,394.24Z" style={{ fill: '#b2b2b2' }} /><path d="M340.16,393.7v-40h14.47v2.91H344v15h8.7v2.77H344v16.49h10.77v2.82Z" style={{ fill: '#b2b2b2' }} /></g><g id="freepik--Number--inject-37"><path d="M121.82,338.88V289.81H62.16V260.72l52-121.54h39.69V262.69h20.46v27.12H153.87v49.07ZM90.75,262.69h31.07V175.91Zm153.6,79.14q-17.5,0-29-7.39A45.83,45.83,0,0,1,198.12,314q-5.79-13.08-5.79-30.08V195.39q0-17.5,5.55-30.69a44.17,44.17,0,0,1,17-20.59q11.46-7.4,29.46-7.4t29.46,7.4a44.28,44.28,0,0,1,17,20.59q5.55,13.19,5.55,30.69V283.9q0,17-5.8,30.08a45.81,45.81,0,0,1-17.25,20.46Q261.85,341.84,244.35,341.83Zm0-29.33q7.64,0,11.34-4.69a25.57,25.57,0,0,0,4.93-11.34,71.82,71.82,0,0,0,1.23-13.07V195.88a84.53,84.53,0,0,0-1.11-13.68,24.46,24.46,0,0,0-4.81-11.46q-3.69-4.68-11.58-4.69t-11.59,4.69A24.56,24.56,0,0,0,228,182.2a84.53,84.53,0,0,0-1.11,13.68V283.4a64.93,64.93,0,0,0,1.36,13.07,26.52,26.52,0,0,0,5.05,11.34Q237,312.51,244.35,312.5Zm133.38,26.38V289.81H318.06V260.72l52-121.54h39.69V262.69h20.47v27.12H409.77v49.07Zm-31.07-76.19h31.07V175.91Z" style={{ fill: '#087E8C', stroke: '#263238', strokeMiterlimit: 10 }} /></g><g id="freepik--Character--inject-37"><g style={{ opacity: '0.30000000000000004' }}><path d="M320.7,285.13l.13.12a4.63,4.63,0,0,0,.56.39l.16.08a4,4,0,0,0,.55.27l.2.08a5.5,5.5,0,0,0,.81.26l.14,0c.26.06.53.11.83.15l.28,0c.35,0,.72.08,1.12.09h0a10.18,10.18,0,0,0,4.12-.75,11.87,11.87,0,0,0,2-1,15.15,15.15,0,0,0,1.26-.89c.21-.16.41-.33.61-.51a13.61,13.61,0,0,0,1.15-1.13c3.32-3.64,5.27-9.31,3.65-16-.4-1.66-.83-3.22-1.28-4.72a61.19,61.19,0,0,0-2.51-6.85c-.24-.54-.48-1.07-.74-1.58a34.06,34.06,0,0,0-1.89-3.36c-.44-.69-.9-1.35-1.37-2a18.14,18.14,0,0,0-3.74-3.7c-.33-.24-.67-.46-1-.66a1.74,1.74,0,0,0-.27-.14l-7.42,17.33V280c.71,2,1.19,3.75,2.45,5h0Z" /><path d="M296.37,280V245.67c-1,0-1.88.08-2.67.13a61.77,61.77,0,0,0-1.81-16.1,24.36,24.36,0,0,0-7.45-17.41c-.47-6.64-4.18-14.4-8.33-19.84a1.67,1.67,0,0,0,.31,0c1.66-.18,2.7-2.26,3.43-5.84.1-.49.18-.95.24-1.39a11.55,11.55,0,0,0,3.7-3.66,11.3,11.3,0,0,0,1-3.58,21.59,21.59,0,0,0,4.91-4.06,11.26,11.26,0,0,0,2.54-5.56c-.43-1.25-.9-2.48-1.4-3.68A46.16,46.16,0,0,0,282,151a16.84,16.84,0,0,0-3.4-1.34,13.44,13.44,0,0,0-3.28-.46,105.57,105.57,0,0,0-18.41-2c-3-.07-5.67,0-8.08.09a13,13,0,0,0-6.59-1,12.71,12.71,0,0,0-4,1.1,30.81,30.81,0,0,0-10.81-.92c-.76.09-1.51.18-2.24.29,0-.38-.05-.76-.1-1.14-.08-.73-.19-1.45-.32-2.16a33.5,33.5,0,0,0,0-4,41.89,41.89,0,0,0-10,4.64,44.17,44.17,0,0,0-17,20.59q-5.55,13.19-5.55,30.69v8.78c3.58,4.63,7.9,9.82,10.75,11.81l.62.64c.2,3.45.81,11.22,2.31,13.78,0,0-1.18,4.12.82,6.21-.61,4.62-1.42,16.19,3.38,27.59,3.73,8.85,10.09,13.63,16.63,15.15V195.88A84.53,84.53,0,0,1,228,182.2a24.56,24.56,0,0,1,4.81-11.46q3.7-4.68,11.59-4.69t11.58,4.69a24.46,24.46,0,0,1,4.81,11.46,84.53,84.53,0,0,1,1.11,13.68V283.4c0,1.48-.07,3-.16,4.46.05.28.11.55.18.8h0a6.28,6.28,0,0,0,.3.81,1,1,0,0,0,.07.15,3.72,3.72,0,0,0,.3.52l.09.12a3,3,0,0,0,.44.49h0a3,3,0,0,0,.5.36l.14.08.5.24.1,0c.21.08.43.15.67.22l.16,0c.19.06.4.11.61.16l.23.06.75.17c3.62.84,9.8-4.07,11.38-9a21.88,21.88,0,0,0,.74-3.28l.6-.09A45.25,45.25,0,0,0,296.37,280Zm-22.95-90.67,0,0,.06-.43C273.43,189,273.42,189.18,273.42,189.29Zm.31-2.49c.06-.51.13-1,.19-1.5h0C273.87,185.83,273.79,186.33,273.73,186.8Z" /><path d="M153.87,207.26c-1.29,3.23-2.43,6.14-3,7.76-1.84,5.17-3.77,11-3.73,14.34s2.11,7.62,3.73,7.76,2.77-.93,3-3.18Z" /></g><path d="M269.13,217.18a125.35,125.35,0,0,1,.94,15.09c-.06,7.6,1.72,7.76,5.35,8.6s9.8-4.07,11.38-9,1.43-14.46,1.43-14.46Z" style={{ fill: '#dedede' }} /><path d="M276.29,241.46a4.55,4.55,0,0,1-1-.1l-.34-.08c-3.78-.87-5.45-1.57-5.39-9a126.12,126.12,0,0,0-.93-15l-.08-.57,20.16.23v.49c0,.39.13,9.66-1.46,14.62S280.2,241.46,276.29,241.46Zm-6.59-23.77a126.43,126.43,0,0,1,.87,14.58c-.06,7,1.31,7.27,4.62,8l.34.08c3.35.78,9.3-4,10.79-8.67,1.34-4.17,1.42-11.81,1.41-13.81Z" style={{ fill: '#263238' }} /><path d="M285.67,226.34c-.17,3.37-1.17,8.78-6.18,11.44a8.84,8.84,0,0,1-9-.39c.74,2.64,2.37,2.9,4.89,3.48,3.62.84,9.8-4.07,11.38-9s1.43-14.46,1.43-14.46l-2.23,0C285.92,219.88,285.78,224.07,285.67,226.34Z" style={{ fill: '#dedede' }} /><path d="M276.29,241.46a4.55,4.55,0,0,1-1-.1l-.33-.08c-2.31-.53-4.13-.95-4.92-3.76l-.36-1.26,1.11.71a8.39,8.39,0,0,0,8.46.37c4.56-2.43,5.73-7.34,5.91-11h0c.12-2.43.27-7.07.33-8.95v-.49l3.21,0v.49c0,.39.13,9.66-1.46,14.62S280.2,241.46,276.29,241.46Zm-4.75-3c.72,1.14,1.88,1.41,3.65,1.82l.34.07c3.35.78,9.3-4,10.79-8.67,1.34-4.17,1.42-11.81,1.41-13.81l-1.25,0c-.07,2.11-.2,6.23-.31,8.48-.19,3.95-1.47,9.21-6.44,11.86A9.18,9.18,0,0,1,271.54,238.49Z" style={{ fill: '#263238' }} /><path d="M251.9,224.35A48.06,48.06,0,0,0,266,221.23c8.15-3,17.3-9.83,15.34-16.5s-12.58-8.52-16.77-8.07a76.79,76.79,0,0,0-9,1.69S256.59,217.13,251.9,224.35Z" style={{ fill: '#dedede' }} /><path d="M251,224.87l.51-.79c4.55-7,3.64-25.52,3.63-25.71l0-.41.4-.1a78.69,78.69,0,0,1,9.06-1.7c4.24-.45,15.22,1.32,17.31,8.43,1.95,6.64-6.6,13.77-15.65,17.11a47.66,47.66,0,0,1-14.3,3.15Zm5.16-26.14c.11,2.77.55,17.89-3.32,25.07a51.76,51.76,0,0,0,13.06-3c8.61-3.18,16.81-9.83,15-15.89-1.9-6.45-12.39-8.13-16.24-7.71A73.93,73.93,0,0,0,256.13,198.73Z" style={{ fill: '#263238' }} /><path d="M248,227.08a16.13,16.13,0,0,0,8.6-5.35c3.25-4.24,4.45-11.08,2.71-15.66S248,227.08,248,227.08Z" style={{ fill: '#087E8C' }} /><path d="M247.17,227.75l.32-.85c1.92-5.13,8.41-21.87,11.21-21.88h0c.26,0,.75.11,1,.87,1.78,4.7.56,11.79-2.78,16.14a16.51,16.51,0,0,1-8.9,5.54ZM258.67,206c-1.37,0-6.13,10.39-9.9,20.32a15.21,15.21,0,0,0,7.39-4.91c3.15-4.1,4.31-10.77,2.65-15.17A.54.54,0,0,0,258.67,206Z" style={{ fill: '#263238' }} /><path d="M215.83,183.24s-3.14,15,3,29.69,19.64,18.18,29.09,14.15,11.71-17.34,11.81-26.19-.16-12.87-.16-12.87S227.81,191.12,215.83,183.24Z" style={{ fill: '#dedede' }} /><path d="M240.23,229.13a21.69,21.69,0,0,1-8.06-1.57c-4.22-1.71-10-5.61-13.76-14.44-6.17-14.66-3.11-29.83-3.07-30l.15-.72.61.4c11.7,7.7,43.14,4.73,43.46,4.7l.51-.05,0,.52s.26,4.15.16,12.91c-.07,6.49-1.4,22.07-12.12,26.64A20.19,20.19,0,0,1,240.23,229.13Zm-24-45.07c-.51,3.14-2.15,16.1,3.14,28.68,3.59,8.51,9.17,12.25,13.22,13.89a20,20,0,0,0,15.21,0c10.18-4.34,11.44-19.44,11.51-25.73.08-7-.07-11-.13-12.32C254.9,188.94,227.86,191,216.19,184.06Z" style={{ fill: '#263238' }} /><path d="M214.67,179.13s-1.41,4.92,1.44,6.73,17.56,10.45,35,7.14c9.76-1.85,7.61-4.71,7.44-6.28S214.67,179.13,214.67,179.13Z" style={{ fill: '#087E8C' }} /><path d="M243.13,194.25a53.88,53.88,0,0,1-27.29-8c-3.12-2-1.71-7.07-1.65-7.29l.12-.42.43.06c.11,0,11.07,1.53,21.9,3.21,22.29,3.46,22.38,4.22,22.44,4.83a5.48,5.48,0,0,0,.12.58,3.41,3.41,0,0,1-.26,2.88c-.95,1.48-3.4,2.55-7.7,3.36A43.29,43.29,0,0,1,243.13,194.25Zm-28.08-14.56c-.24,1.16-.72,4.45,1.33,5.75,2.76,1.75,17.4,10.34,34.67,7.07,3.91-.74,6.28-1.72,7.05-2.92a2.53,2.53,0,0,0,.13-2.11q-.08-.28-.12-.54C256,185.7,230.94,181.88,215.05,179.69Z" style={{ fill: '#263238' }} /><path d="M212.29,163.67s.43,12.14,2.38,15.46,27.77,13.41,40.88,10.57S290,175.18,292.6,166.6s-4.16-22.08-10.52-28.58-9.15-7.78-9.15-7.78S257.35,151,238,157.88,212.29,163.67,212.29,163.67Z" style={{ fill: '#fff' }} /><path d="M250.25,190.7c-13.93,0-34.13-8.12-36-11.32-2-3.39-2.44-15.19-2.45-15.69l0-.61.6.1c.06,0,6.49.95,25.43-5.77s34.58-27.26,34.73-27.47l.25-.32.36.17c.12.05,2.95,1.4,9.3,7.88s13.39,20,10.64,29.08-24.61,20.67-37.42,23.44A26.17,26.17,0,0,1,250.25,190.7Zm-37.44-26.48c.12,2.42.66,11.88,2.29,14.66s27.07,13.2,40.35,10.33c13.62-3,34.24-14.74,36.67-22.75,2.6-8.59-4.49-22.06-10.4-28.09-5-5.06-7.74-6.93-8.65-7.48-2.16,2.75-17,21.1-34.93,27.46C221.9,164.11,214.8,164.32,212.81,164.22Z" style={{ fill: '#263238' }} /><path d="M315.21,194.34s13.72-5.37,19.2-2.08,9.67,11,12.55,22.83-5.54,20.55-12.81,20.28-6-5-8.83-9.81-6.31-7.61-6.54-8.12S322,201.73,315.21,194.34Z" style={{ fill: '#fff' }} /><path d="M334.49,235.88h-.36c-5.53-.2-6.47-3-7.57-6.13a20.72,20.72,0,0,0-1.68-3.93,35.46,35.46,0,0,0-5.63-7.11,4.74,4.74,0,0,1-.92-1c-.1-.21-.07-.41.08-1.6.49-3.8,2-15.36-3.56-21.37l-.5-.54.68-.26c.57-.23,14-5.43,19.64-2S344.53,203,347.44,215a18,18,0,0,1-3.2,15.78A13,13,0,0,1,334.49,235.88Zm-15.22-18.6c.11.13.41.43.69.72a35.91,35.91,0,0,1,5.79,7.31,22.77,22.77,0,0,1,1.76,4.1c1.05,3.07,1.82,5.28,6.66,5.46,3.3.12,6.77-1.65,9.3-4.75a17,17,0,0,0,3-14.92c-2.85-11.74-7-19.32-12.32-22.51-4.53-2.73-15.3.86-18.09,1.87,5.29,6.46,3.83,17.81,3.34,21.62C319.34,216.62,319.29,217.08,319.27,217.28Z" style={{ fill: '#263238' }} /><path d="M334.41,192.26a10.55,10.55,0,0,0-5.74-1c2.78,2.06,8.26,7.08,11.85,16.63,5,13.23,2.72,20.19.18,22.76s-7.92,3.51-10.25,3.23l-1.3-.15c1,1,2.49,1.6,5,1.69,7.27.27,15.69-8.41,12.81-20.28S339.89,195.55,334.41,192.26Z" style={{ fill: '#fff' }} /><path d="M334.49,235.88h-.36c-2.45-.09-4.14-.67-5.33-1.84l-1.05-1,2.76.33c2.12.25,7.36-.59,9.83-3.09,2.83-2.86,4.23-10.19-.29-22.23-3.51-9.35-8.82-14.29-11.68-16.41l-1.13-.84,1.41-.06a10.84,10.84,0,0,1,6,1.12c5.56,3.34,9.86,11.12,12.77,23.14a18,18,0,0,1-3.2,15.78A13,13,0,0,1,334.49,235.88Zm-3.26-1.5a9.63,9.63,0,0,0,2.94.49c3.3.12,6.77-1.65,9.3-4.75a17,17,0,0,0,3-14.92c-2.85-11.74-7-19.32-12.32-22.51h0a8.42,8.42,0,0,0-4-1A37.6,37.6,0,0,1,341,207.66c5.9,15.71,1.54,21.8.06,23.29C338.6,233.43,333.85,234.4,331.23,234.38Z" style={{ fill: '#263238' }} /><path d="M286.21,228s12.94,3.72,25-1.12,19.09-12.84,16.44-22.62-7.64-10.12-18.57-10-13.13,1.07-13.13,1.07S295.54,223,286.21,228Z" style={{ fill: '#fff' }} /><path d="M297.39,229.89a45.4,45.4,0,0,1-11.32-1.37l-1.18-.33,1.08-.59c9-4.88,9.43-31.95,9.43-32.23v-.32l.29-.13c.1,0,2.41-1,13.32-1.11s16.32.26,19.06,10.36c2.56,9.44-3.54,17.9-16.73,23.22A37.61,37.61,0,0,1,297.39,229.89Zm-9.94-2.06c3.36.75,13.82,2.54,23.52-1.37,12.67-5.1,18.56-13.13,16.15-22-2.56-9.43-7.12-9.75-18.08-9.62-8.66.1-11.76.7-12.64.94C296.32,199,295.52,221.74,287.45,227.83Z" style={{ fill: '#263238' }} /><ellipse cx="278.43" cy="179.18" rx="23.96" ry="22.12" transform="translate(73.88 439.54) rotate(-84.61)" style={{ fill: '#087E8C' }} /><path d="M278.11,203.63a18.75,18.75,0,0,1-2-.1c-12.42-1.17-21.49-13.05-20.22-26.48s12.4-23.4,24.81-22.23A21.67,21.67,0,0,1,296,163.48a25.36,25.36,0,0,1,5,17.82C299.75,194,289.71,203.63,278.11,203.63Zm.63-47.9c-11.09,0-20.69,9.22-21.84,21.42-1.21,12.88,7.45,24.27,19.32,25.39s22.51-8.45,23.73-21.33h0a24.34,24.34,0,0,0-4.76-17.13,20.68,20.68,0,0,0-14.56-8.26Q279.69,155.73,278.74,155.73Z" style={{ fill: '#263238' }} /><ellipse cx="285.16" cy="207.05" rx="21.74" ry="20.06" transform="translate(52.23 471.5) rotate(-84.61)" style={{ fill: '#087E8C' }} /><path d="M284.88,229.28c-.6,0-1.2,0-1.81-.09a19.66,19.66,0,0,1-13.87-7.86,23,23,0,0,1-4.51-16.21c1.15-12.2,11.27-21.28,22.56-20.2s19.54,11.86,18.39,24.07h0C304.55,220.54,295.42,229.28,284.88,229.28Zm.57-43.45c-10,0-18.72,8.35-19.77,19.39a22.06,22.06,0,0,0,4.31,15.5,18.7,18.7,0,0,0,13.18,7.48c10.73,1,20.37-7.65,21.47-19.31s-6.74-22-17.48-23C286.59,185.86,286,185.83,285.45,185.83Z" style={{ fill: '#263238' }} /><path d="M302.36,194.68s.9-19.35-8.55-30-30.94-1.94-34.51,14,4,39.83,13.83,46,18.2.14,23.81-8.42S302.36,194.68,302.36,194.68Z" style={{ fill: '#fff' }} /><path d="M281.19,227.75a15.56,15.56,0,0,1-8.33-2.63c-10.23-6.41-17.58-30.76-14.05-46.53,2.23-10,10.88-16.38,18.47-18.35,6.83-1.77,13-.26,16.9,4.13,9.43,10.6,8.72,29.32,8.68,30.32,0,.73.07,13.35-5.5,21.87C294.27,221.27,288.66,227.75,281.19,227.75Zm1.52-67.23a20.87,20.87,0,0,0-5.18.69c-7.29,1.89-15.61,8.06-17.74,17.6-3.46,15.44,3.66,39.24,13.6,45.46,10.93,6.85,19.18-2.24,23.13-8.26,5.45-8.33,5.34-21.2,5.34-21.32v0c0-.2.78-19.27-8.43-29.62A13.94,13.94,0,0,0,282.71,160.52Z" style={{ fill: '#263238' }} /><path d="M168.85,140.49s-7.48,18.1-9.32,23.26-3.78,11-3.73,14.34,2.11,7.62,3.72,7.76,2.78-.94,3-3.21.13-3.21,1.27-4.46a34.18,34.18,0,0,1,5.18-3.92c.46-.21.81,1.51-.27,3.39s-3.45,3.58-2,5.49,4.44-.32,6-1.93a16.18,16.18,0,0,0,3.87-7.15c.65-2.79.33-8.68.33-8.68l13.22-12.48S172.69,150.8,168.85,140.49Z" style={{ fill: '#dedede' }} /><path d="M159.81,186.37l-.33,0c-2.06-.18-4.14-4.88-4.18-8.25s1.78-9,3.75-14.51c1.83-5.12,9.26-23.11,9.33-23.3l.49-1.17.45,1.19c3.69,9.9,20.78,12.07,21,12.09l1.06.13-13.82,13.05c.05,1.14.23,6-.37,8.6a16.8,16.8,0,0,1-4,7.38c-.87.88-3.12,2.93-5.06,2.82a2.28,2.28,0,0,1-1.73-.93c-1.34-1.72-.13-3.28.94-4.66a14.9,14.9,0,0,0,1-1.39,4.2,4.2,0,0,0,.62-2.52,34.87,34.87,0,0,0-4.73,3.64c-.85.93-.92,1.64-1.05,3.21,0,.3-.06.61-.09,1C162.8,185,161.6,186.37,159.81,186.37Zm9.05-44.6c-1.65,4-7.31,17.79-8.86,22.15-1.86,5.2-3.74,10.94-3.7,14.16,0,3.47,2.13,7.17,3.27,7.27,1.88.17,2.36-1.66,2.47-2.76,0-.34.06-.66.09-.94.14-1.64.23-2.63,1.32-3.81a33.57,33.57,0,0,1,5.33-4,.68.68,0,0,1,.81.18c.53.59.49,2.3-.44,3.92a12.73,12.73,0,0,1-1.06,1.5c-1.12,1.45-1.76,2.38-.94,3.44a1.3,1.3,0,0,0,1,.54c1.25.07,3-1.25,4.28-2.52a15.63,15.63,0,0,0,3.74-6.91c.63-2.69.33-8.48.33-8.54l0-.23,12.64-11.94C185.39,152.63,172.89,150,168.86,141.77Z" style={{ fill: '#263238' }} /><path d="M174.28,179.3c-2.08-.05-3.57-.55-4.41-1.48a2.55,2.55,0,0,1-.7-1.76l1,.08-.5,0,.5,0a1.53,1.53,0,0,0,.46,1c.46.49,1.46,1.08,3.67,1.13Z" style={{ fill: '#263238' }} /><path d="M162.7,178.76a6.55,6.55,0,0,1-6.23-4.67l1-.26a5.51,5.51,0,0,0,6.32,3.86l.13,1A9.88,9.88,0,0,1,162.7,178.76Z" style={{ fill: '#263238' }} /><path d="M159.51,182.47a5.65,5.65,0,0,1-3.3-1.17l.61-.79c.12.09,2.93,2.21,5.07-.15l.74.67A4.1,4.1,0,0,1,159.51,182.47Z" style={{ fill: '#263238' }} /><path d="M175.78,165.91c-4.57,0-8-1.15-10.3-3.42a9.29,9.29,0,0,1-2.69-6.45l1,0a8.42,8.42,0,0,0,2.41,5.72c2.26,2.25,5.88,3.28,10.77,3.08l.05,1Z" style={{ fill: '#263238' }} /><path d="M172.59,135.12s-3.52.06-3.74,5.37,4,13.49,12.18,14.84,13.23-3.51,14.71-7.52S178.17,132,172.59,135.12Z" style={{ fill: '#087E8C' }} /><path d="M183.76,156.07a17.3,17.3,0,0,1-2.81-.24c-8.47-1.41-12.83-10-12.6-15.37.21-5.09,3.38-5.75,4.09-5.83,4.25-2.25,14.81,3,20.27,7.64,1.95,1.66,4.14,4,3.5,5.72A13,13,0,0,1,183.76,156.07ZM172.6,135.62c-.14,0-3,.16-3.25,4.89-.22,5,3.85,13,11.76,14.33,8.55,1.42,13-4.09,14.16-7.2.26-.69-.45-2.26-3.2-4.61-5.23-4.44-15.61-9.54-19.24-7.48l-.11.06Z" style={{ fill: '#263238' }} /><path d="M181.75,120.67s-8.64,10.39-10.15,15.67,2.26,15,11.84,16.17,15.28-6.78,15.28-6.78Z" style={{ fill: '#dedede' }} /><path d="M185.37,153.13a17.12,17.12,0,0,1-2-.12,14.09,14.09,0,0,1-10.12-6.27c-2.18-3.31-3-7.44-2.14-10.53,1.52-5.33,9.89-15.43,10.24-15.86l.43-.51,17.54,25.89-.2.29C199.07,146.09,193.94,153.13,185.37,153.13Zm-3.66-31.62c-1.75,2.15-8.36,10.51-9.63,15-.79,2.78,0,6.68,2,9.71a12.88,12.88,0,0,0,9.41,5.82c8.17,1,13.49-4.94,14.59-6.3Z" style={{ fill: '#263238' }} /><path d="M186.69,112.29a20.74,20.74,0,0,0-6.6,13.69c-.43,8.47,7.37,18.24,17.55,17.3S195.07,111.88,186.69,112.29Z" style={{ fill: '#087E8C' }} /><path d="M196.29,143.84a15.93,15.93,0,0,1-11.07-4.64A17.83,17.83,0,0,1,179.59,126a21,21,0,0,1,6.78-14l.13-.1h.36c6.49,0,14.4,15.83,15,24.55.32,4.53-1.17,7.17-4.18,7.45C197.22,143.82,196.76,143.84,196.29,143.84Zm-9.4-31.06a20.36,20.36,0,0,0-6.3,13.22,16.82,16.82,0,0,0,5.32,12.48,14.79,14.79,0,0,0,11.69,4.3c3.05-.28,3.47-3.62,3.27-6.38C200.23,127.3,192.38,112.82,186.89,112.78Z" style={{ fill: '#263238' }} /><path d="M191,118.56S186.41,124,189,133.18a29.69,29.69,0,0,0,9.07,14.23s12.53,18,17.79,20.81,14.57,2.9,33.43-4.76,26.3-18.87,29.19-24.62-14.07-32.26-19.93-36.11a30.74,30.74,0,0,0-19.06-4.49,81.86,81.86,0,0,0-10.68,2Z" style={{ fill: '#087E8C' }} /><path d="M224,170.47a17.78,17.78,0,0,1-8.4-1.81c-5.21-2.76-17-19.57-17.93-20.9a30.09,30.09,0,0,1-9.18-14.44c-2.64-9.31,1.84-14.85,2-15.08l.17-.13L228.6,99.75a80.17,80.17,0,0,1,10.84-2,31.41,31.41,0,0,1,19.39,4.57c5.88,3.86,23.22,30.57,20.11,36.75-3.73,7.4-11.86,17.73-29.45,24.87C238.69,168.31,230.35,170.47,224,170.47ZM191.27,119c-.52.7-4.1,5.89-1.78,14.09a29.47,29.47,0,0,0,8.9,14l.1.1c.13.18,12.52,17.95,17.62,20.65,6.2,3.29,17,1.73,33-4.77,17.3-7,25.28-17.14,28.93-24.39,2.62-5.22-13.83-31.57-19.77-35.46a30.33,30.33,0,0,0-18.73-4.42,82.23,82.23,0,0,0-10.6,2Z" style={{ fill: '#263238' }} /><path d="M187.59,115.55s-4.53,5.46-1.93,14.62a29.69,29.69,0,0,0,9.07,14.23s12.53,18,17.79,20.8,14.57,2.9,33.43-4.75,26.29-18.87,29.19-24.63-14.07-32.25-19.93-36.1a30.7,30.7,0,0,0-19.07-4.49,81.92,81.92,0,0,0-10.67,2Z" style={{ fill: '#fff' }} /><path d="M220.69,167.46a17.75,17.75,0,0,1-8.4-1.81c-5.21-2.77-17-19.57-17.93-20.91a30,30,0,0,1-9.18-14.43c-2.64-9.31,1.84-14.85,2-15.08l.17-.13,37.87-18.36a80.17,80.17,0,0,1,10.84-2,31.34,31.34,0,0,1,19.39,4.57c5.88,3.86,23.22,30.57,20.11,36.75-3.73,7.4-11.86,17.73-29.45,24.86C235.34,165.3,227,167.46,220.69,167.46ZM187.92,116c-.52.7-4.1,5.89-1.78,14.09a29.28,29.28,0,0,0,8.9,14l.1.11c.13.18,12.52,17.95,17.62,20.65,6.2,3.29,17,1.72,33-4.77,17.31-7,25.29-17.14,28.93-24.39,2.63-5.22-13.82-31.57-19.76-35.46a30.33,30.33,0,0,0-18.73-4.42,82.23,82.23,0,0,0-10.6,2Z" style={{ fill: '#263238' }} /><circle cx="205.49" cy="97.45" r="28.49" transform="translate(55.47 268.38) rotate(-74.1)" style={{ fill: '#087E8C' }} /><path d="M205.43,126.44a29,29,0,1,1,3.19-.17A28.77,28.77,0,0,1,205.43,126.44Zm.11-57a29,29,0,0,0-3.08.17,27.86,27.86,0,1,0,3.08-.17Z" style={{ fill: '#263238' }} /><circle cx="201.39" cy="90.04" r="32.17" transform="translate(5.98 192.41) rotate(-51.74)" style={{ fill: '#ababab' }} /><path d="M201.33,122.71a32.67,32.67,0,1,1,32.54-36.2h0a32.69,32.69,0,0,1-29,36A33.37,33.37,0,0,1,201.33,122.71Zm.08-64.35a33.5,33.5,0,0,0-3.44.19,31.67,31.67,0,1,0,34.91,28.07h0A31.72,31.72,0,0,0,201.41,58.36Z" style={{ fill: '#263238' }} /><path d="M223.46,94.59a6.53,6.53,0,0,0,.64-3.39c-.2-2.42-2.91-6.88-4-8.09s-2.87.22-2.87.22l-2-3.59a17.95,17.95,0,1,0-31.37,17.45l4.14,7.45-2.32-3.76s-2.12.73-1.69,2.32,2.79,6.25,4.74,7.69a6.28,6.28,0,0,0,3.45,1.26l5.47,9.83a32.51,32.51,0,0,0,7.25,0,32.13,32.13,0,0,0,24.69-16.46Z" style={{ fill: '#263238' }} /><path d="M201.42,122.7a33.3,33.3,0,0,1-3.86-.22l-.25,0-5.46-9.82a7,7,0,0,1-3.45-1.33c-2.12-1.57-4.49-6.36-4.92-8a2.46,2.46,0,0,1,1.65-2.77l-1.74-3.12A18.45,18.45,0,0,1,215.63,79.5l1.74,3.11a2.37,2.37,0,0,1,3,.16c1.14,1.21,4,5.75,4.17,8.38a7,7,0,0,1-.57,3.42l6.11,11-.13.25a32.71,32.71,0,0,1-25.08,16.71A31.44,31.44,0,0,1,201.42,122.7Zm-3.49-1.19a31.62,31.62,0,0,0,31.06-16l-6.1-11,.12-.24a5.92,5.92,0,0,0,.59-3.12c-.19-2.29-2.84-6.64-3.91-7.78-.79-.85-2.12.21-2.18.26l-.46.37L214.76,80a17.45,17.45,0,1,0-30.49,17l4.14,7.45-.86.5-2.1-3.39c-.47.25-1.22.76-1,1.56.41,1.51,2.71,6.06,4.56,7.42a5.82,5.82,0,0,0,3.18,1.16l.28,0Z" style={{ fill: '#263238' }} /><path d="M215,85.59a13.57,13.57,0,0,0-18.45-5.25l-2.45,1.36a13.57,13.57,0,0,0-5.25,18.45l12.27,22a33.26,33.26,0,0,0,3.71-.18,32.08,32.08,0,0,0,22.88-13.58Z" style={{ fill: '#fff' }} /><path d="M201.42,122.7h-.55l-12.42-22.31a14.08,14.08,0,0,1,5.45-19.13l2.45-1.36a14.07,14.07,0,0,1,19.12,5.45l12.87,23.12-.18.26a32.65,32.65,0,0,1-23.24,13.78A31.31,31.31,0,0,1,201.42,122.7Zm1.75-43.57a13,13,0,0,0-6.33,1.64l-2.45,1.37a13.07,13.07,0,0,0-5.07,17.76l12.14,21.8a31.05,31.05,0,0,0,3.35-.18,31.65,31.65,0,0,0,22.35-13.11L214.6,85.84A13.07,13.07,0,0,0,203.17,79.13Z" style={{ fill: '#263238' }} /><path d="M200,99c.46.83.43,1.73-.07,2s-1.28-.16-1.74-1-.43-1.73.07-2S199.49,98.12,200,99Z" style={{ fill: '#263238' }} /><path d="M210.12,93.29c.46.83.43,1.73-.07,2s-1.28-.17-1.75-1-.42-1.72.08-2S209.66,92.47,210.12,93.29Z" style={{ fill: '#263238' }} /><polygon points="205.81 103.78 205.39 102.87 209.56 100.95 204.74 94.95 205.52 94.32 211.14 101.33 205.81 103.78" style={{ fill: '#263238' }} /><path d="M212.88,106.5a1.71,1.71,0,1,1-2.32-.66A1.71,1.71,0,0,1,212.88,106.5Z" style={{ fill: '#263238' }} /><path d="M193.36,97.9l-1-.23s.9-3.54,5.42-3.84l.06,1C194.08,95.08,193.37,97.87,193.36,97.9Z" style={{ fill: '#263238' }} /><path d="M204.88,90.61l-.95-.32s1.3-3.78,6.13-2.73l-.21,1C205.92,87.68,204.92,90.49,204.88,90.61Z" style={{ fill: '#263238' }} /><path d="M211.92,118.42a19.54,19.54,0,0,1-4.67-.69l.27-1a15.9,15.9,0,0,0,5.81.53,8.91,8.91,0,0,0,5.13-2.84,24.1,24.1,0,0,0,2.11-5l1,.31c-.06.16-1.3,4-2.28,5.27a9.77,9.77,0,0,1-5.74,3.21A8.18,8.18,0,0,1,211.92,118.42Z" style={{ fill: '#263238' }} /><path d="M177.72,108.62a32.16,32.16,0,0,1,55-26,32.17,32.17,0,1,0-54.3,29.86A33.08,33.08,0,0,1,177.72,108.62Z" style={{ fill: '#fff' }} /><path d="M179.3,114.15,178,112.88a32.66,32.66,0,1,1,55.14-30.34l.41,1.75L232.34,83a31.66,31.66,0,0,0-54.12,25.56h0a31,31,0,0,0,.67,3.84Zm22.11-55.79a33.2,33.2,0,0,0-3.44.19,31.71,31.71,0,0,0-28.06,34.91,31.36,31.36,0,0,0,7.63,17.41c-.13-.74-.24-1.47-.31-2.2h0a32.66,32.66,0,0,1,54.52-27.62A31.69,31.69,0,0,0,201.41,58.36Z" style={{ fill: '#263238' }} /><ellipse cx="252.7" cy="111.31" rx="14.48" ry="16.36" transform="translate(-10.54 27.94) rotate(-6.2)" style={{ fill: '#087E8C' }} /><path d="M253.07,128.15c-7.63,0-14.32-6.53-15.26-15.23a17.89,17.89,0,0,1,3.05-12.3A13.84,13.84,0,0,1,262,98.33,18.39,18.39,0,0,1,264.54,122a13.82,13.82,0,0,1-11.47,6.16Zm-.72-32.69a12.26,12.26,0,0,0-1.36.07,13.15,13.15,0,0,0-9.31,5.67,16.83,16.83,0,0,0-2.88,11.61c.94,8.7,8,15.1,15.62,14.27a13.17,13.17,0,0,0,9.31-5.67,17.43,17.43,0,0,0-2.43-22.35A13.27,13.27,0,0,0,252.35,95.46Z" style={{ fill: '#263238' }} /><path d="M286,98.37A95.31,95.31,0,0,0,265.6,96c-12.64-.3-20.07.92-22.47,7.21s-1.85,16.45,5.94,19.81c4.35,1.87,10.73.79,15.38-.27s16-5.81,19.62-11.52S287.72,101,286,98.37Z" style={{ fill: '#fff' }} /><path d="M255,124.5a15.65,15.65,0,0,1-6.1-1.06c-8.21-3.54-8.55-14.29-6.2-20.45,2.55-6.7,10.35-7.83,23-7.53a97.57,97.57,0,0,1,20.55,2.42l.18.06.11.16c2.06,3.2,1.35,8.07-2,13.36-3.74,6-15.61,10.74-19.93,11.73A43.89,43.89,0,0,1,255,124.5Zm7.19-28.08c-10.14,0-16.44,1.38-18.56,6.93-2.21,5.79-1.94,15.89,5.66,19.17,4.29,1.84,10.66.71,15.08-.3,4.2-1,15.72-5.58,19.31-11.3,3-4.77,3.76-9.28,2.07-12.12a99,99,0,0,0-20.13-2.34C264.4,96.44,263.26,96.42,262.16,96.42Z" style={{ fill: '#263238' }} /><path d="M299.27,108s-4.18-7.53-12-9.63-14.94,3-18.18,8-1.8,6.64-1.8,6.64,11.42-5.72,17.33-6.79S299.27,108,299.27,108Z" style={{ fill: '#087E8C' }} /><path d="M267.19,113.63l-.25-.29c-.17-.2-1.59-2.1,1.76-7.24,3.53-5.43,10.91-10.31,18.73-8.21s12.1,9.55,12.28,9.86l.62,1.12-1.21-.4c-.09,0-8.67-2.78-14.38-1.75s-17.09,6.68-17.2,6.74Zm16.47-15.24c-6,0-11.32,4-14.12,8.25-2.15,3.29-2.14,5-2,5.69,2.25-1.1,11.7-5.65,17-6.6,4.66-.84,10.89.65,13.56,1.4-1.48-2.13-5.24-6.74-10.95-8.28A13.44,13.44,0,0,0,283.66,98.39Z" style={{ fill: '#263238' }} /><path d="M267,118.08s-1.84-5.26,5.55-12.09,21-4.37,25.37.19,3.9,12.6.39,16.49a19,19,0,0,1-7,5.1S284.46,116.05,267,118.08Z" style={{ fill: '#fff' }} /><path d="M291.11,128.38l-.21-.36c-.06-.11-6.94-11.41-23.81-9.44l-.4,0-.14-.38c-.07-.23-1.85-5.66,5.69-12.62s21.28-4.75,26.07.2c4.64,4.79,4,13.16.41,17.17a19.36,19.36,0,0,1-7.22,5.24Zm-20.15-11c13.06,0,19.31,8,20.57,9.8a19.46,19.46,0,0,0,6.44-4.82c3.33-3.69,3.89-11.4-.37-15.8-4-4.15-17.21-7.08-24.68-.17-5.91,5.46-5.72,9.89-5.51,11.18A34,34,0,0,1,271,117.35Z" style={{ fill: '#263238' }} /><path d="M260.87,128.42S263.7,121,267,118.08s13.28-4.1,20.7-1.54,6.11,11.1,4.72,13.77-5.64,4.82-5.64,4.82Z" style={{ fill: '#fff' }} /><path d="M286.87,135.66l-26.67-6.9.2-.52c.12-.31,2.91-7.6,6.3-10.53s13.42-4.33,21.19-1.65a8.48,8.48,0,0,1,5.4,5,12.59,12.59,0,0,1-.4,9.49c-1.44,2.79-5.68,4.94-5.85,5Zm-25.33-7.58,25.21,6.52c.78-.42,4.11-2.31,5.26-4.52a11.73,11.73,0,0,0,.35-8.66,7.5,7.5,0,0,0-4.79-4.41c-7.35-2.53-17.07-1.27-20.22,1.45C264.66,120.8,262.25,126.35,261.54,128.08Z" style={{ fill: '#263238' }} /><path d="M261.71,127.21a6.44,6.44,0,0,0-3,1.87,16.52,16.52,0,0,1-5,4c-3,1.73-6.25,1.8-5.06,5s5.63,2.75,7.81,2.23,3.08-1.32,4.76-2.62,2.95-10.26,3-10.7S261.71,127.21,261.71,127.21Z" style={{ fill: '#fff' }} /><path d="M253.4,141.26c-2.05,0-4.39-.57-5.25-2.93-1.06-2.85.93-3.69,3-4.58a20.5,20.5,0,0,0,2.24-1.06,14.42,14.42,0,0,0,4.32-3.34l.6-.62a6.9,6.9,0,0,1,3.27-2c2.48-.54,2.79-.23,2.94-.08l.19.19,0,.35s0,.19-.07.42c-1,6.25-2.05,9.71-3.15,10.57l-.38.29a10.45,10.45,0,0,1-4.57,2.42A14.15,14.15,0,0,1,253.4,141.26Zm8.41-13.56a6,6,0,0,0-2.76,1.72l-.58.62a15.77,15.77,0,0,1-4.55,3.52,23.14,23.14,0,0,1-2.35,1.11c-2.28,1-3.18,1.43-2.49,3.31,1.15,3.1,5.82,2.26,7.23,1.92a9.44,9.44,0,0,0,4.19-2.23l.37-.29c.41-.32,1.48-1.91,2.78-9.94v0a14.82,14.82,0,0,0-1.84.29Z" style={{ fill: '#263238' }} /><path d="M269.66,124.24s-4.46-1-6.65.72-2,8.63-1.83,12.81,1.66,7.53,3.26,8a4.16,4.16,0,0,0,3.87-.42c.64-.63,0-6.72.42-11.67S269.66,124.24,269.66,124.24Z" style={{ fill: '#fff' }} /><path d="M266.11,146.59a5.83,5.83,0,0,1-1.83-.29c-1.91-.63-3.42-4.21-3.6-8.51-.24-5.81-.16-11.44,2-13.21,2.35-1.92,6.88-.87,7.07-.82l.43.1-.05.44s-.49,4.58-.93,9.47c-.2,2.32-.16,4.93-.13,7,0,3.37,0,4.5-.42,4.95A3.71,3.71,0,0,1,266.11,146.59Zm.66-22.16a5.57,5.57,0,0,0-3.44.92c-2.1,1.7-1.78,9.2-1.65,12.4.17,4.16,1.65,7.18,2.91,7.6a3.77,3.77,0,0,0,3.37-.3,22.62,22.62,0,0,0,.13-4.23c0-2.12-.07-4.77.14-7.13.36-4,.75-7.77.88-9A14.82,14.82,0,0,0,266.77,124.43Z" style={{ fill: '#263238' }} /><path d="M269.66,124.24a42.4,42.4,0,0,0-2.58,9.81c-.58,5,2.11,11.68,3.15,12.26s4,.41,4.65-1.06.18-6.49.26-9.43,1.49-9.25,1.28-11.19S271.85,122.46,269.66,124.24Z" style={{ fill: '#fff' }} /><path d="M271.8,147.13a3.83,3.83,0,0,1-1.81-.38c-1.37-.77-4-7.91-3.41-12.76a43.14,43.14,0,0,1,2.61-9.94l.05-.12.1-.08a6.7,6.7,0,0,1,6.12-1,2.12,2.12,0,0,1,1.46,1.68,32,32,0,0,1-.61,5.85,53.4,53.4,0,0,0-.67,5.42c0,.93,0,2.07.05,3.28.08,2.69.15,5.23-.35,6.34a2.84,2.84,0,0,1-1.8,1.4A5.7,5.7,0,0,1,271.8,147.13Zm-1.73-22.58a42.51,42.51,0,0,0-2.49,9.56c-.58,5,2.16,11.34,2.9,11.77a4.07,4.07,0,0,0,2.75,0,1.91,1.91,0,0,0,1.2-.87c.41-.89.33-3.55.26-5.89,0-1.22-.07-2.38-.05-3.34a51.86,51.86,0,0,1,.68-5.54,33.27,33.27,0,0,0,.61-5.59c-.05-.45-.49-.72-.85-.87A5.79,5.79,0,0,0,270.07,124.55Z" style={{ fill: '#263238' }} /><path d="M276.42,124.63s2.67-1.27,4.6-.22,2.39,3.94,2.13,5.37-1.17,9.93-1.79,12-2.19,3-3.46,2.9-2.15-1.73-2.35-3.53-.41-5.29-.41-5.29Z" style={{ fill: '#fff' }} /><path d="M278.13,145.15h-.29c-1.65-.18-2.58-2.13-2.78-4s-.42-5.28-.42-5.32L276,124.3l.25-.12c.12-.06,2.92-1.37,5.05-.21s2.65,4.44,2.38,5.9c-.08.45-.24,1.7-.42,3.14a88.89,88.89,0,0,1-1.38,8.88A4.17,4.17,0,0,1,278.13,145.15Zm-2.49-9.27s.22,3.43.41,5.18,1,3,1.9,3.08,2.38-.74,2.94-2.54c.4-1.33,1-5.77,1.33-8.71.2-1.52.35-2.72.44-3.2.21-1.17-.12-3.89-1.88-4.84-1.36-.74-3.23-.14-3.89.13l-1.25,10.9Z" style={{ fill: '#263238' }} /><path d="M283.14,127.12a22.38,22.38,0,0,1,4.65,1.6c1.06.72,1.46,3.06.73,6.64s-1.77,5.66-3.43,5.84-3-1.92-3-3.18S283.45,130,283.14,127.12Z" style={{ fill: '#fff' }} /><path d="M284.88,141.71a2.83,2.83,0,0,1-1.88-.79,4.3,4.3,0,0,1-1.42-2.9c0-.45.15-1.43.35-2.79.36-2.46.92-6.17.71-8l-.08-.71.7.17a22.28,22.28,0,0,1,4.82,1.66c1.33.92,1.67,3.53.93,7.16-.84,4.11-2,6-3.87,6.24Zm-1.2-13.93a51.44,51.44,0,0,1-.76,7.6c-.18,1.21-.34,2.26-.34,2.64a3.27,3.27,0,0,0,1.09,2.15,1.81,1.81,0,0,0,1.36.53c1.3-.14,2.28-1.92,3-5.44.76-3.74.2-5.64-.52-6.13A17.2,17.2,0,0,0,283.68,127.78Z" style={{ fill: '#263238' }} /><path d="M235.68,129.83c2.25,3.63,1.45,8.2-1.78,10.2s-7.68.68-9.93-3-1.46-8.2,1.78-10.2S233.42,126.19,235.68,129.83Z" style={{ fill: '#087E8C' }} /><path d="M230.59,141.46a8.46,8.46,0,0,1-7.05-4.12,8.72,8.72,0,0,1-1.23-6.07,7,7,0,0,1,3.17-4.83c3.47-2.14,8.23-.74,10.62,3.12a8.78,8.78,0,0,1,1.24,6.07,7,7,0,0,1-3.18,4.83A6.74,6.74,0,0,1,230.59,141.46Zm-1.53-15a5.77,5.77,0,0,0-3.05.85,6,6,0,0,0-2.72,4.15,7.7,7.7,0,0,0,1.11,5.37c2.1,3.4,6.24,4.65,9.23,2.8a6,6,0,0,0,2.72-4.15,7.71,7.71,0,0,0-1.1-5.37h0A7.44,7.44,0,0,0,229.06,126.44Z" style={{ fill: '#263238' }} /><path d="M218,142.07c1.58,2.55,1,5.75-1.24,7.15s-5.38.48-7-2.07-1-5.75,1.24-7.16S216.38,139.52,218,142.07Z" style={{ fill: '#263238' }} /><path d="M232.46,148.16c1.58,2.55,1,5.75-1.24,7.15s-5.38.48-7-2.07-1-5.75,1.24-7.16S230.89,145.61,232.46,148.16Z" style={{ fill: '#ababab' }} /><path d="M228.89,156.47a5.6,5.6,0,0,1-1.55-.23,6.41,6.41,0,0,1-4.39-7.09,5,5,0,0,1,6.43-4,6.25,6.25,0,0,1,3.51,2.74h0c1.72,2.78,1.09,6.29-1.41,7.84A4.92,4.92,0,0,1,228.89,156.47Zm-1.06-10.54a3.82,3.82,0,0,0-2.06.58,4,4,0,0,0-1.84,2.81,5.41,5.41,0,0,0,3.69,6,4.05,4.05,0,0,0,3.33-.39c2-1.26,2.52-4.16,1.09-6.47h0a5.25,5.25,0,0,0-2.94-2.3A4.35,4.35,0,0,0,227.83,145.93Z" style={{ fill: '#263238' }} /></g></svg>
          <h1 className='text-danger fw-bold' style={{ fontSize: 70 }}>{language == "en" ? "Page Not Found" : "لا يمكن العثور عي الصفحة "}</h1>

        </div>
      </div>
      <Places />
    </>
  );
}

export default Error;