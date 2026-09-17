"use client";

import React from "react";
import Link from "next/link";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link) => (
        <Link href={link.href} key={link.label}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand flex items-center py-1" href="/" aria-label="Warrgyizmorsch ERP home">
            <img
              src="/images/logo/WARR LOGO.webp"
              alt="Warrgyizmorsch ERP"
              className="h-9 w-auto object-contain max-w-[220px]"
            />
          </Link>
          <p>The calm, connected ERP for growing businesses.</p>
          <div className="social-row">
            <Link href="/#contact" aria-label="Warrgyizmorsch on LinkedIn">
              in
            </Link>
            <Link href="/#contact" aria-label="Warrgyizmorsch on X">
              x
            </Link>
            <Link href="/#contact" aria-label="Warrgyizmorsch on YouTube">
              ▶
            </Link>
          </div>
        </div>

        <FooterColumn
          title="Modules Hub"
          links={[
            { label: "All Modules Directory", href: "/modules" },
            { label: "CRM Module", href: "/modules/crm" },
            { label: "Sales & Orders", href: "/modules/sales" },
            { label: "Purchase & Vendor", href: "/modules/purchase" },
            { label: "Inventory Control", href: "/modules/inventory" },
            { label: "Production & Manufacturing", href: "/modules/production" },
            { label: "Accounting & Finance", href: "/modules/accounting" },
            { label: "HRMS & Payroll", href: "/modules/hrms" },
            { label: "Project Management", href: "/modules/project" },
          ]}
        />

        <FooterColumn
          title="Resources"
          links={[
            { label: "Documentation", href: "/#faq" },
            { label: "Customer Stories", href: "/#solutions" },
            { label: "FAQ & Support", href: "/#faq" },
            { label: "Integrations", href: "/#features" },
          ]}
        />

        <FooterColumn
          title="Company"
          links={[
            { label: "» Privacy Policy", href: "/privacy-policy" },
            { label: "» Terms & Conditions", href: "/terms-and-conditions" },
            { label: "» Cancellation Policy", href: "/cancellation-policy" },
            { label: "Contact Us", href: "/#contact" },
          ]}
        />
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Warrgyizmorsch Systems. All rights reserved.</span>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/cancellation-policy">Cancellation Policy</Link>
        </div>
      </div>
    </footer>
  );
}
