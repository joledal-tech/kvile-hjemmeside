import { GoogleGenAI } from "@google/genai";
import { PLOTS } from "../constants.ts";

export const askKvileExpert = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-pro-preview';
  
  const systemInstruction = `
    Du er "Kvile-veiviseren", en profesjonell og inspirerende rådgiver for hytteprosjektet Kvile i Eidskog.
    
    INFORMASJON OM KVILE:
    - Lokasjon: Skjærvangen i Eidskog kommune, ca. 75 minutter fra Oslo og 15 minutter fra svenskegrensen.
    - Infrastruktur: Ferdig vei, vann, avløp og fiberbredbånd til tomtegrensen på alle 34 tomter.
    - Tomter: Varierer fra solrike skogstomter til eksklusive strandtomter helt nede ved vannet.
    - Området: Kjent for dype skoger, rike jakt- og fiskemuligheter (abbor/gjedde), og nærhet til Magnor Glassverk.
    
    DIN OPPGAVE:
    1. Svar på spørsmål om tomter, priser og fasiliteter basert på denne dataen: ${JSON.stringify(PLOTS.map(p => ({id: p.id, status: p.status, pris: p.price, m2: p.size})))}
    2. Bruk Google Søk-verktøyet for å gi dagsaktuelle svar om Eidskog (f.eks. vær, arrangementer eller lokale nyheter).
    3. Hold en entusiastisk men profesjonell tone. Svar alltid på norsk.
    4. Hvis brukeren er interessert, oppfordre til å bestille visning via skjemaet på siden.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      },
    });
    
    return {
      text: response.text || "Jeg klarte dessverre ikke å hente svar akkurat nå. Vennligst prøv igjen.",
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("AI Error:", error);
    return {
      text: "Beklager, vi har en teknisk forstyrrelse i veiviseren. Kontakt oss direkte på post@kvile-hytter.no.",
      sources: []
    };
  }
};