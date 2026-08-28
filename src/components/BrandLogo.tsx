export function BrandLogo() {
  return (
    <img
      className="logo"
      src={`${import.meta.env.BASE_URL}favicon.svg`}
      width={36}
      height={36}
      alt=""
      aria-hidden="true"
    />
  )
}
