# MicroFrontend-Setup
A microfrontend architecture showcasing a Next.js 15 host application integrated with a React 18 remote app. This repository demonstrates module federation for seamless component sharing, optimized performance, and scalable frontend development.

Repository Structure host-app:  Next.js 15 application serving as the host app <br /> remote-app: React 18 application serving as the remote app

Host App (Next.js 15)  <br />
 cd host-app  <br /> npm install  <br /> npm run dev

Remote App (React 18) <br /> cd remote-app <br /> npm install <br /> npm start

How it Works: <br /> The host app (Next.js 15) serves as the main entry point for the application. <br /> The remote app (React 18) is built and served as a separate module. <br /> The host app uses the next/dynamic module to dynamically import the remote app. <br /> The remote app is rendered as a separate component within the host app.

