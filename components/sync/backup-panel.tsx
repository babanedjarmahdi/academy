"use client";

import { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import { useSync } from "@/context/sync-provider";
import { Button } from "@/components/ui/button";

export function BackupPanel() {
  const { exportBackup, importBackup } = useSync();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    setMsg(null);
    try {
      await importBackup(file);
      setMsg({ ok: true, text: "Backup restored successfully." });
    } catch (err) {
      setMsg({
        ok: false,
        text: err instanceof Error ? err.message : "Could not restore backup.",
      });
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" onClick={exportBackup}>
          <Download className="h-4 w-4" />
          Export backup
        </Button>
        <Button variant="secondary" onClick={() => fileRef.current?.click()} disabled={busy}>
          <Upload className="h-4 w-4" />
          {busy ? "Restoring…" : "Import backup"}
        </Button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => onFile(e.target.files?.[0])}
        />
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Export downloads a JSON file with your lessons, XP, achievements, streak, notes, and
        projects. Import restores from that file. Use this as an extra safety net on top of
        cloud sync, or to move progress to a new device.
      </p>
      {msg ? (
        <p className={msg.ok ? "text-sm text-accent" : "text-sm text-red-400"}>{msg.text}</p>
      ) : null}
    </div>
  );
}
