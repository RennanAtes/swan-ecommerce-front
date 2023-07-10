"use client"
import CrieSeuSite from "../components/CrieSeuSite";
import HeaderLogado from "../components/HeaderLogado";
import Contato from "../components/home/Contato";
import SectionTemplate from "../components/home/SectionTemplate";

export default function Home() {
    return (
      <main>
        <CrieSeuSite />
        <SectionTemplate />
        <Contato />
      </main>
    )
  }
  