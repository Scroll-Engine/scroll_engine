export default function Footer() {
    return (
        <footer className="border-t border-[var(--neon-purple)]/20 bg-black py-12 text-center text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Scroll-Engine. All rights reserved.</p>
        </footer>
    );
}
