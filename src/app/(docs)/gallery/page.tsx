"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const gallery_images = [
  { id: 1, title: "Vesper Dashboard", category: "Interface", src: "/gallery/og-image.png", description: "Main dashboard view showcasing the clean interface" },
  // { id: 2, title: "UI Element", category: "Interface", src: "/gallery/ui-2.png", description: "Modern UI components" },
  // { id: 3, title: "Brand Identity", category: "Branding", src: "/gallery/brand.png", description: "Visual brand elements" },
];

export default function gallery_page() {
  const [selected_image, set_selected_image] = useState<number | null>(null);

  function open_lightbox(index: number) {
    set_selected_image(index);
  }

  function close_lightbox() {
    set_selected_image(null);
  }

  function go_previous() {
    set_selected_image((prev) => (prev === null ? null : (prev - 1 + gallery_images.length) % gallery_images.length));
  }

  function go_next() {
    set_selected_image((prev) => (prev === null ? null : (prev + 1) % gallery_images.length));
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col selection:bg-brand-accent/30 selection:text-brand-accent">
      <div className="fixed inset-0 z-[-2] bg-background" />
      <div
        className="fixed inset-0 z-[-1] opacity-20 dark:opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a0a0a0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <main className="flex-1 w-full pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A visual journey through Vesper&apos;s design system and interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery_images.map((image, index) => (
              <motion.button
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => open_lightbox(index)}
                className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card/50"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-white/60 uppercase tracking-wider">{image.category}</span>
                  <h3 className="text-sm font-semibold text-white mt-1">{image.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center text-sm text-muted-foreground mt-12">
            More screenshots coming soon.
          </motion.p>
        </div>
      </main>

      <AnimatePresence>
        {selected_image !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close_lightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); close_lightbox(); }}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <IconX className="size-6 text-white" />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go_previous(); }}
              className="absolute left-4 p-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <IconChevronLeft className="size-6 text-white" />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go_next(); }}
              className="absolute right-4 p-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <IconChevronRight className="size-6 text-white" />
            </button>

            <motion.div
              key={selected_image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black"
            >
              <Image
                src={gallery_images[selected_image].src}
                alt={gallery_images[selected_image].title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{gallery_images[selected_image].category}</span>
              <h2 className="text-lg font-semibold text-white mt-1">{gallery_images[selected_image].title}</h2>
              <p className="text-sm text-white/60 mt-1">{gallery_images[selected_image].description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
