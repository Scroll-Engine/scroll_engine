export default function Footer() {
    return (
        <footer className="border-t border-[var(--neon-purple)]/20 bg-black py-12 text-center text-zinc-500">
            <div className="mb-6 flex justify-center space-x-6">
                <a
                    href="https://x.com/ScrollEngineX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-[var(--neon-purple)]"
                    aria-label="Follow us on X"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 fill-current"
                    >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Scroll-Engine. All rights reserved.</p>
        </footer>
    );
}
