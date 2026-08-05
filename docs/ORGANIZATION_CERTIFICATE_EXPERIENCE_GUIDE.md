# Organization, Certificate, and Experience Guide

## Organization

Public file:

```text
src/content/organizations.json
```

Required data:

- organization name;
- role in Indonesian and English;
- period;
- contribution description;
- at least one verifiable achievement;
- evidence status;
- optional logo, photos, and link.

Organization photos use the same schema as experience photos:

```json
{
  "src": "/media/organizations/example/activity-01.jpg",
  "alt": {
    "id": "Deskripsi visual foto",
    "en": "Visual description of the photo"
  },
  "caption": {
    "id": "Konteks kegiatan dan kontribusi",
    "en": "Activity context and contribution"
  }
}
```

## Certificate

Public file:

```text
src/content/credentials.json
```

A public credential needs a real issuer, date, and either an image or verification URL.

The Digital Marketing draft is available in:

```text
src/content/drafts/credentials.json
```

Do not publish it before issuer, date, and evidence are complete.

## Experience

Public file:

```text
src/content/experiences.json
```

Each experience can contain:

- title;
- organizer;
- role;
- period;
- bilingual description;
- contribution list;
- tags;
- multiple photos;
- optional reference link.

Photos open in an accessible lightbox and can be closed with the Escape key.
