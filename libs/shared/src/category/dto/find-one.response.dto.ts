export interface FindOneResponseDTO {
  id: string;
  slug: string;
  name: string;
  description?: string;
  createdDate: Date;
  active: boolean;
}
