'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'web', 'mobile', 'ai', 'other'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="max-w-4xl w-full px-4">
        <h1 className="text-black font-geist-sans text-3xl mb-8 text-center">
          Portfolio
        </h1>

        {/* Search and Filter */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 border rounded ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black border-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-black font-geist-sans text-xl mb-4">
              Featured Projects
            </h2>
            {featuredProjects.map(project => (
              <div
                key={project.id}
                className="mb-6 p-4 border border-gray-200 rounded"
              >
                <h3 className="text-black font-geist-sans text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* All Projects */}
        <div>
          <h2 className="text-black font-geist-sans text-xl mb-4">
            All Projects ({filteredProjects.length})
          </h2>
          {filteredProjects.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No projects found matching your criteria
            </p>
          ) : (
            <div>
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className="mb-6 p-4 border border-gray-200 rounded"
                >
                  <h3 className="text-black font-geist-sans text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
