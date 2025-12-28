export interface Cert {
  id: string;
  nombre: string;
  issuer?: string;
  fecha?: string;
  img: string;
  tags?: string[];
  credUrl?: string;
}
