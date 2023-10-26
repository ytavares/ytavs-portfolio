export interface OverviewProps {
  /**
   * Titulo do conteudo do overview
   */
  title?: string;

  /**
   * Descrição do conteudo
   */
  description?: string;

  /**
   * Link de redirecionamento
   */
  link?: RedirectProps[];
}

export interface RedirectProps {
  /**
   * Determina o texto do link
   */
  linkText?: string;

  /**
   * Determina o link
   */
  linkRedirect?: string;
}