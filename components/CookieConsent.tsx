"use client"

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CookiePolicy } from "./Policy-cookies";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
      <Card className="shadow-lg border border-gray-300 bg-blue-50">
        <CardContent className="p-4 flex flex-col md:flex-row gap-3">
          <p className="text-sm text-gray-700 px-5">
            Usamos cookies para mejorar tu experiencia en nuestro sitio web. Al aceptarlas, nos ayudas a ofrecer un mejor servicio. Para más información, revisa nuestra{" "}
            <CookiePolicy />.
          </p>
          <div className="flex justify-center items-center px-5">
            <Button onClick={acceptCookies} className="bg-blue-600 hover:bg-blue-700 text-white w-40">
              Aceptar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}