import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-5">
      <div className="flex flex-col md:flex-row items-center justify-center text-muted-foreground gap-2">
        <p>Copyright © 2025 PrivShare</p>
        <p>
          The source code is available on{' '}
          <span>
            <Link
              href="https://github.com/yuk228/privshare-blog"
              className="hover:text-foreground transition-colors hover:underline"
            >
              Github
            </Link>
          </span>
        </p>
      </div>
    </footer>
  )
}
