import { ReactNode } from "react";
export interface ContactProps {
  /**
   * Titulo da pagina de contato
   */
  title?: string;

  /**
   * Determina as redes sociais e seus links
   */
  socials?: Social[];
}

export interface Social {
  /**
   * Determina o titulo da rede
   */
  title?: string;

  /**
   * Determina o icone da rede social
   */
  icon?: ReactNode;

  /**
   * Determina o link da rede social
   */
  link?: string;
}