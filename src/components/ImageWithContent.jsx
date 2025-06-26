import React from 'react';

export default function ImageWithContent({
    title,
    description,
    features = [],
    imageUrl,
    buttonText,
    buttonLink
}) {
    return (
        <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <img
                    src={imageUrl}
                    alt={title}
                    className="rounded-xl w-full h-auto md:w-[80%]"/>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="mb-4">
                    {description}
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                {buttonText && buttonLink && (
                    <a
                        href={buttonLink}
                        className="inline-block outline outline-1 outline-blue-600 px-6 py-3 rounded-full relative font-semibold hover:text-white hover:outline-none btn-effect"
                    >
                        {buttonText}
                    </a>
                )}

            </div>

        </section>
    );
}
