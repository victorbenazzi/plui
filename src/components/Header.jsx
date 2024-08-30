import LogoHeaderPlui from "../assets/logo-plui-header.svg";
import ContactIcon from "../assets/contact-icon.svg";
export function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[124px]">
      <div className="flex items-center justify-between w-full max-w-[1245px] px-4">
        <img src={LogoHeaderPlui} alt="Logo Plui" />

        <a
          href="#"
          className="flex items-center justify-center gap-x-[14px] text-sm font-semibold text-primary-default hover:underline">
          <img src={ContactIcon} alt="Entre em contato" />
          <span>
            <span className="font-normal ">Dúvidas?</span> Fale conosco
          </span>
        </a>
      </div>
    </header>
  );
}
