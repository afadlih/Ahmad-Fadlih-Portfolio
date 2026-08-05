"use client";

import { useMemo, useState } from "react";

type IntakeType = "organization" | "credential" | "experience" | "project-evidence";
type FormState = Record<string, string>;

const initialState: FormState = {
  id: "",
  name: "",
  titleId: "",
  titleEn: "",
  roleId: "",
  roleEn: "",
  descriptionId: "",
  descriptionEn: "",
  period: "",
  issuer: "",
  credentialId: "",
  credentialUrl: "",
  image: "",
  skills: "",
  organization: "",
  achievementsId: "",
  achievementsEn: "",
  photos: "",
  projectSlug: "",
  evidenceType: "screenshot",
  featureIds: "",
};

function lines(value: string) {
  return value.split("\n").map((item) => item.trim()).filter(Boolean);
}

function bilingualLines(idValue: string, enValue: string) {
  const idLines = lines(idValue);
  const enLines = lines(enValue);
  const size = Math.max(idLines.length, enLines.length);
  return Array.from({ length: size }, (_, index) => ({ id: idLines[index] ?? "", en: enLines[index] ?? "" }));
}

function makePhotos(value: string) {
  return lines(value).map((src, index) => ({
    src,
    alt: { id: `Tulis alt text foto ${index + 1}`, en: `Write alt text for photo ${index + 1}` },
    caption: { id: "Tulis konteks foto", en: "Write the photo context" },
  }));
}

export function ContentStudio() {
  const [type, setType] = useState<IntakeType>("organization");
  const [form, setForm] = useState<FormState>(initialState);
  const update = (key: string, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const payload = useMemo(() => {
    if (type === "organization") {
      return {
        id: form.id || "replace-with-id",
        published: false,
        evidenceStatus: "draft",
        name: form.name || "Nama organisasi",
        role: { id: form.roleId, en: form.roleEn },
        period: form.period,
        description: { id: form.descriptionId, en: form.descriptionEn },
        achievements: bilingualLines(form.achievementsId, form.achievementsEn),
        logo: form.image,
        photos: makePhotos(form.photos),
        link: form.credentialUrl,
      };
    }
    if (type === "credential") {
      return {
        id: form.id || "replace-with-id",
        published: false,
        evidenceStatus: "draft",
        title: { id: form.titleId, en: form.titleEn },
        issuer: form.issuer,
        issuedAt: form.period,
        credentialId: form.credentialId,
        credentialUrl: form.credentialUrl,
        image: form.image,
        skills: form.skills.split(",").map((item) => item.trim()).filter(Boolean),
        description: { id: form.descriptionId, en: form.descriptionEn },
      };
    }
    if (type === "experience") {
      return {
        id: form.id || "replace-with-id",
        published: false,
        evidenceStatus: "draft",
        title: { id: form.titleId, en: form.titleEn },
        organization: form.organization,
        role: { id: form.roleId, en: form.roleEn },
        period: form.period,
        description: { id: form.descriptionId, en: form.descriptionEn },
        contributions: bilingualLines(form.achievementsId, form.achievementsEn),
        photos: makePhotos(form.photos),
        tags: form.skills.split(",").map((item) => item.trim()).filter(Boolean),
        link: form.credentialUrl,
      };
    }
    return {
      projectSlug: form.projectSlug,
      evidence: {
        id: form.id || "replace-with-evidence-id",
        type: form.evidenceType,
        status: "planned",
        title: { id: form.titleId, en: form.titleEn },
        description: { id: form.descriptionId, en: form.descriptionEn },
        safeToPublish: true,
        src: form.image,
        alt: { id: form.roleId, en: form.roleEn },
        caption: { id: form.achievementsId, en: form.achievementsEn },
        featureIds: form.featureIds.split(",").map((item) => item.trim()).filter(Boolean),
      },
    };
  }, [form, type]);

  const output = JSON.stringify(payload, null, 2);
  const copy = async () => navigator.clipboard.writeText(output);
  const download = () => {
    const blob = new Blob([`${output}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${form.id || type}-draft.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="studio-shell">
      <div className="studio-type-tabs" role="tablist">
        {(["organization", "credential", "experience", "project-evidence"] as IntakeType[]).map((item) => (
          <button type="button" key={item} aria-pressed={type === item} onClick={() => setType(item)}>{item}</button>
        ))}
      </div>

      <div className="studio-grid">
        <form className="studio-form" onSubmit={(event) => event.preventDefault()}>
          <StudioField label="ID unik" value={form.id} onChange={(value) => update("id", value)} placeholder="digital-marketing-certification" />
          {type === "project-evidence" ? <StudioField label="Project slug" value={form.projectSlug} onChange={(value) => update("projectSlug", value)} placeholder="internlog-ai" /> : null}
          {type === "organization" ? <StudioField label="Nama organisasi" value={form.name} onChange={(value) => update("name", value)} /> : null}
          {type === "credential" ? <StudioField label="Penerbit" value={form.issuer} onChange={(value) => update("issuer", value)} /> : null}
          {type === "experience" ? <StudioField label="Organisasi atau penyelenggara" value={form.organization} onChange={(value) => update("organization", value)} /> : null}
          {type !== "organization" ? <><StudioField label="Judul Indonesia" value={form.titleId} onChange={(value) => update("titleId", value)} /><StudioField label="English title" value={form.titleEn} onChange={(value) => update("titleEn", value)} /></> : null}
          {type !== "credential" ? <><StudioField label={type === "project-evidence" ? "Alt text Indonesia" : "Peran Indonesia"} value={form.roleId} onChange={(value) => update("roleId", value)} /><StudioField label={type === "project-evidence" ? "English alt text" : "English role"} value={form.roleEn} onChange={(value) => update("roleEn", value)} /></> : null}
          {type !== "project-evidence" ? <StudioField label="Periode atau tanggal" value={form.period} onChange={(value) => update("period", value)} placeholder="2025 - 2026 atau 2025-11" /> : null}
          <StudioArea label="Deskripsi Indonesia" value={form.descriptionId} onChange={(value) => update("descriptionId", value)} />
          <StudioArea label="English description" value={form.descriptionEn} onChange={(value) => update("descriptionEn", value)} />
          {type === "credential" ? <><StudioField label="Credential ID" value={form.credentialId} onChange={(value) => update("credentialId", value)} /><StudioField label="Skills, pisahkan koma" value={form.skills} onChange={(value) => update("skills", value)} /></> : null}
          {type === "experience" ? <StudioField label="Tags, pisahkan koma" value={form.skills} onChange={(value) => update("skills", value)} /> : null}
          {(type === "organization" || type === "experience") ? <><StudioArea label="Kontribusi atau pencapaian Indonesia, satu per baris" value={form.achievementsId} onChange={(value) => update("achievementsId", value)} /><StudioArea label="English contributions or outcomes, one per line" value={form.achievementsEn} onChange={(value) => update("achievementsEn", value)} /><StudioArea label="Path foto, satu per baris" value={form.photos} onChange={(value) => update("photos", value)} placeholder="/media/experience/event/foto-01.jpg" /></> : null}
          {type === "project-evidence" ? <><StudioField label="Evidence type" value={form.evidenceType} onChange={(value) => update("evidenceType", value)} /><StudioField label="Feature IDs, pisahkan koma" value={form.featureIds} onChange={(value) => update("featureIds", value)} /><StudioArea label="Caption Indonesia" value={form.achievementsId} onChange={(value) => update("achievementsId", value)} /><StudioArea label="English caption" value={form.achievementsEn} onChange={(value) => update("achievementsEn", value)} /></> : null}
          <StudioField label={type === "organization" ? "Logo path" : "Image or file path"} value={form.image} onChange={(value) => update("image", value)} placeholder="/media/..." />
          <StudioField label={type === "credential" ? "Credential URL" : "Link opsional"} value={form.credentialUrl} onChange={(value) => update("credentialUrl", value)} />
        </form>

        <section className="studio-output">
          <div><h2>JSON draft</h2><p>Review hasil, simpan ke folder draft, lalu lengkapi alt text dan bukti sebelum published.</p></div>
          <pre>{output}</pre>
          <div className="studio-actions"><button type="button" onClick={copy}>Copy JSON</button><button type="button" onClick={download}>Download JSON</button></div>
        </section>
      </div>
    </div>
  );
}

function StudioField({ label, value, onChange, placeholder = "" }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label><span>{label}</span><input value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} /></label>;
}
function StudioArea({ label, value, onChange, placeholder = "" }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label><span>{label}</span><textarea rows={4} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} /></label>;
}
