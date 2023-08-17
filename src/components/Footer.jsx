function Footer() {
  return (
    <footer className="footer bg-base-200 items-center p-4">
      <div className="grid-flow-col items-center">
        <p>Voyage 45 © {new Date().getFullYear()} - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          target="_blank"
          href="https://github.com/chingu-voyages/v45-tier2-team-25"
        >
          GitHub Repository
        </a>
      </div>
    </footer>
  );
}

export default Footer;
