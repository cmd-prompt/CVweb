"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cvData } from "@/lib/data";

type ContactType = "linkedin" | "github" | "email" | null;

export function ContactButtons() {
  const [openDialog, setOpenDialog] = useState<ContactType>(null);

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpenDialog("linkedin")}
          className="border-zinc-800 hover:bg-zinc-900"
        >
          LinkedIn ↗
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpenDialog("github")}
          className="border-zinc-800 hover:bg-zinc-900"
        >
          GitHub ↗
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpenDialog("email")}
          className="border-zinc-800 hover:bg-zinc-900"
        >
          Email ↗
        </Button>
      </div>

      <Dialog open={openDialog !== null} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="sm:max-w-md bg-zinc-950 border-zinc-800">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium text-muted-foreground tracking-widest">
              {openDialog?.toUpperCase()}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 pt-4">
            {openDialog === "email" ? (
              <>
                <div className="text-sm text-muted-foreground">Email:</div>
                <a
                  href={`mailto:${cvData.contact.email}`}
                  className="text-lg text-blue-500 hover:text-blue-400 underline-offset-4 hover:underline"
                >
                  {cvData.contact.email}
                </a>
              </>
            ) : openDialog === "linkedin" ? (
              <>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Username:</div>
                  <div className="text-base">{cvData.contact.linkedin.username}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">URL:</div>
                  <a
                    href={cvData.contact.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-blue-500 hover:text-blue-400 underline-offset-4 hover:underline break-all"
                  >
                    {cvData.contact.linkedin.url}
                  </a>
                </div>
              </>
            ) : openDialog === "github" ? (
              <>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Username:</div>
                  <div className="text-base">{cvData.contact.github.username}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">URL:</div>
                  <a
                    href={cvData.contact.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-blue-500 hover:text-blue-400 underline-offset-4 hover:underline break-all"
                  >
                    {cvData.contact.github.url}
                  </a>
                </div>
              </>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
