export type Venue = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "venue";
  _updatedAt: string;
  name: string;
  description: string;
  avatar: ImageReference;
  bannerImage: ImageReference;
  address: string;
  openingHours: string;
};

export type VenueWithImage = Venue & {
  avatar: Image;
  bannerImage: Image;
};

export type ImageReference = {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type Image = {
  _key: string;
  _type: "image";
  asset: {
    _id: string;
    _updatedAt: string;
    _rev: string;
    _type: "sanity.imageAsset";
    _createdAt: string;
    originalFilename: string;
    assetId: string;
    mimeType: string;
    url: string;
    path: string;
    sha1hash: string;
    metadata: {
      isOpaque: boolean;
      blurHash: string;
      _type: "sanity.imageMetadata";
      palette: {};
      hasAlpha: boolean;
      lqip: string;
      dimensions: {};
    };
    size: number;
    extension: string;
    uploadId: string;
  };
};
