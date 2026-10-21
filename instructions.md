# Task: Build a website around an existing TypeScript + Vite project

## Project overview

We have an existing TypeScript project built with Vite. It contains two subgames that must remain functional and accessible through a single website.

The goal is to turn the existing project into a polished, well-organized website that:
- Introduces the overall project.
- Provides access to both subgames.
- Documents the technologies and tools used.
- Presents the project in a professional way, suitable for an academic, portfolio, or public demonstration.
- Can be deployed for free using GitHub Pages.

This is a frontend-only project. There is no backend, database, authentication, or server-side processing requirement.

## 1. First step: Analyze the existing codebase

Before making changes:
- Inspect `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, and the existing source files.
- Identify how the two games are implemented, initialized, and rendered.
- Identify the libraries, assets, stylesheets, and dependencies already in use.
- Determine whether the project uses vanilla TypeScript, React, or another framework.
- Identify any existing routing or navigation system.
- Test the existing build if possible.

Do not rewrite the games or replace working functionality unnecessarily. Preserve their current logic, controls, assets, and behavior.

Adapt the implementation to the existing architecture rather than introducing a new framework without a clear reason.

## 2. Website structure

Build a single website with a consistent layout, shared navigation, and the following pages or sections.

### Home page (`/`)

Create a visually appealing landing page that includes:
- The project name and a short introduction.
- A concise explanation of the project's purpose.
- Two prominent cards, one for each subgame.
- A title, short description, and play button for each game.
- A section highlighting the main technologies used.
- A footer with navigation links, credits, and repository information when available.

The two games must be immediately discoverable from the homepage.

Use placeholder content only where project-specific information is unavailable. Do not invent facts about the project or its creators.

### First subgame (`/games/game1`)

Create a dedicated page for the first game.

Requirements:
- Integrate the existing game without changing its core mechanics.
- Preserve all existing controls, rendering logic, and assets.
- Provide a clear game title and a short description.
- Include an intuitive way to return to the homepage or switch to the other game.
- Ensure the game area adapts to different screen sizes.
- Avoid unnecessary interface elements that distract from gameplay.

### Second subgame (`/games/game2`)

Follow the same principles as the first game:
- Preserve the existing implementation.
- Give the game its own dedicated page.
- Provide clear navigation.
- Ensure responsive behavior and correct asset loading.

Treat the two games as parts of the same project, with a shared visual identity.

### About page (`/about`)

Include:
- The project's purpose and background.
- A general description of how the two subgames relate to the overall project.
- Team members or contributors, if this information is available.
- Links to relevant documentation or the source repository, if available.

Do not fabricate project details, names, or contributions.

### Technologies page (`/technologies`)

Create a clear and readable technical overview.

Organize technologies into categories where applicable:
- Programming languages.
- Frameworks and libraries.
- Build tools and development environment.
- Version control and hosting.
- Other relevant tools or external resources.

For each technology, briefly explain its role in the project.

Derive the list from the actual source code, `package.json`, and project configuration. Do not claim that a technology is used unless there is evidence that it is.

Where practical, include dependency versions and links to official documentation.

### Credits page or section (`/credits`)

Provide a place to acknowledge:
- Contributors.
- Third-party libraries.
- External assets, images, sounds, fonts, and other resources.
- Relevant licenses and attribution requirements.

Include only information that can be verified from the repository or supplied by the project team.

## 3. Navigation and information architecture

Use a consistent navigation bar with links to:
- Home.
- Game 1.
- Game 2.
- About.
- Technologies.
- Credits.

The navigation should work on desktop and mobile, with an accessible mobile menu if needed.

Clearly indicate the current page and provide a consistent footer.

Keep the information architecture simple. Do not create separate websites, separate repositories, or separate domains for the two games.

## 4. Visual design

Create a cohesive, modern interface appropriate for an interactive software project.

Design goals:
- Clean, professional, contemporary appearance.
- Clear typography and visual hierarchy.
- Consistent spacing, colors, buttons, cards, and navigation.
- Visually distinctive game cards.
- Subtle animations and transitions where they improve usability.
- Responsive layouts for desktop, tablet, and mobile.
- Good contrast and keyboard accessibility.
- Appropriate focus states and semantic HTML.

Prefer a coherent design system over excessive decorative effects.

Inspect the existing games before choosing the website's visual style. The website should complement the games rather than impose an unrelated aesthetic.

Avoid adding heavy dependencies solely for visual effects.

## 5. Technical requirements

- Continue using the existing TypeScript and Vite setup.
- Reuse existing dependencies whenever reasonable.
- Keep game logic separate from website layout and navigation.
- Create reusable components for shared UI elements where appropriate.
- Keep styles organized and consistent.
- Ensure all images, fonts, and other assets load correctly in production.
- Avoid hardcoded root-relative asset paths that break when the site is deployed under a repository subpath.
- Handle navigation and browser refreshes correctly.
- Do not introduce a backend or database.
- Do not expose secrets, credentials, or private configuration in the repository.

If a router is needed, choose a lightweight option compatible with the existing stack. If routing would add unnecessary complexity, consider a Vite multi-page architecture instead.

## 6. GitHub Pages deployment

The final website must be deployable using GitHub Pages at no hosting cost.

Requirements:
- Inspect the repository name and existing Vite configuration.
- Configure the Vite `base` path appropriately for GitHub Pages.
- Support deployment under a URL such as `https://USERNAME.github.io/REPOSITORY/`.
- Ensure JavaScript, CSS, images, fonts, and game assets resolve correctly under that base path.
- Ensure internal navigation works in the deployed environment.
- Account for the limitations of static hosting when choosing the routing strategy.
- Verify that `npm run build` produces a working production build in `dist/`.

If deployment automation is not already configured, add a GitHub Actions workflow that installs dependencies, builds the project, uploads the `dist/` artifact, and deploys it to GitHub Pages.

Do not assume the repository name or GitHub username. Use the actual configuration or clearly document the values that need to be supplied.

## 7. Quality assurance

Before finishing:
- Run the available build and type-check commands.
- Fix errors introduced by the implementation.
- Verify that both games still work.
- Check internal navigation and direct page access.
- Check asset paths in production.
- Check responsive behavior.
- Review browser console errors where possible.
- Confirm that the site does not depend on a local development server to function.

Do not claim a test passed unless it was actually executed.

## 8. Implementation workflow

Work in the following order:

1. Analyze the existing project and summarize its current architecture.
2. Propose a minimal implementation plan based on the actual code.
3. Implement the shared website layout and navigation.
4. Integrate the two existing games.
5. Add the About, Technologies, and Credits sections.
6. Configure the production build and GitHub Pages deployment.
7. Run checks and fix any regressions.
8. Summarize the files created or modified and explain how to run and deploy the website.

Make changes directly in the existing project when tools permit. Do not stop after producing a plan unless an essential decision or missing piece of information prevents implementation.

## 9. Internationalization, themes, and project analysis

- **Language switcher:** Add a visible, accessible language selector that allows users to switch all website explanations, descriptions, navigation labels, technical documentation, and other informational content between **Italian and English**. Ensure the selected language is applied consistently across all pages. Do not translate the actual game logic or in-game content unless explicitly required.
- **Light and dark mode:** Add a theme toggle that allows users to switch between light and dark mode. Apply the selected theme consistently across the entire website, including navigation, cards, buttons, documentation pages, and footers. Persist the user's preferences across page navigation and subsequent visits where possible, and respect the operating system's preferred theme by default.
- **Analyze the provided ZIP archive:** I will provide the existing project as a `.zip` archive. Before implementing anything, extract and thoroughly inspect its contents, including source files, assets, configuration files, dependencies, documentation, and existing game implementations. Derive all project-specific information—including the project description, game names, gameplay explanations, technologies, libraries, contributors (if documented), and credits—from the actual contents of the archive. Do not invent missing information or assume technologies are used without verifying them. Preserve the existing games and their functionality. If essential information is missing or ambiguous, use clearly identified placeholders or ask for clarification rather than fabricating details.

## 10. ## Visual Direction and Art Direction

Use the following creative direction as the foundation for the website's visual identity, while also analyzing the existing games in the provided ZIP archive to ensure the design complements their themes and aesthetics.

### Overall aesthetic

Create a clean, editorial-style website for a creative project that uses gaming to communicate a new approach to rehabilitation. The website should feel like a thoughtfully art-directed creative project, rather than a conventional gaming website, a corporate landing page, or a generic SaaS template.

The atmosphere should be **playful, distinctive, warm, and professional**, balancing humor and personality with clarity, credibility, and thoughtful presentation.

### Color palette and visual language

- **Background:** Warm cream or off-white, creating an inviting, paper-like foundation.
- **Primary colors:** Terracotta, rust, and deep, dark brown.
- **Supporting colors:** Use muted, complementary tones where appropriate, maintaining a cohesive and restrained palette.
- **Typography:** Large, expressive, characterful typography for headlines, paired with a highly readable typeface for body text and technical information.
- **Illustrations:** Incorporate humorous, expressive illustrations of pigeons and cowboys, alongside subtle references to pixel art.
- **Textures and details:** Consider restrained paper textures, editorial-style layouts, playful annotations, pixel-inspired details, and small visual surprises. Avoid excessive decoration.

### Layout and composition

Design the website using an editorial approach:
- Generous whitespace and spacious, clearly defined sections.
- Large, memorable headlines and strong typographic hierarchy.
- Evocative imagery and illustrations that contribute to the project's storytelling.
- Elegant game cards that introduce each subgame, with clear descriptions and prominent calls to action.
- Thoughtfully composed layouts that mix text, imagery, and visual details without feeling cluttered.
- Subtle interactions and animations that reinforce the playful personality of the project.
- A consistent visual system across the homepage, both game pages, About, Technologies, and Credits.

### Relationship with the existing games

Before implementing the design, inspect both games in the provided ZIP archive, paying particular attention to their existing visual themes, interfaces, assets, colors, and artistic styles.

Use the proposed cream, terracotta, dark-brown, pigeon, cowboy, and pixel-art direction as the website's overarching art direction. Adapt it to the actual games rather than blindly imposing it.

If the games have distinct visual identities, create a cohesive shared website design while allowing each game's dedicated page to retain its own character. Preserve existing gameplay, interfaces, and assets unless changes are necessary and explicitly justified.

### Tone and storytelling

The website should communicate that this is a creative project exploring a new idea of rehabilitation through gaming.

Its personality should be humorous and approachable without trivializing rehabilitation or the people it aims to support. Use playful illustrations and unexpected details to create curiosity, while keeping explanations clear, respectful, and credible.

Avoid stereotypical gaming aesthetics such as neon colors, aggressive sci-fi interfaces, excessive glow effects, or overly busy HUD-inspired layouts unless they are genuinely present in the existing games and serve a clear purpose.

### Responsive design, accessibility, and themes

Ensure the visual identity works consistently across desktop, tablet, and mobile devices. Preserve readability, sufficient contrast, keyboard accessibility, and clear interaction states.

The previously requested Italian/English language switcher and light/dark mode must also fit this art direction. Both themes should feel intentionally designed, not simply generated by inverting colors. Maintain the cream-and-terracotta identity in the light theme and create a complementary dark palette based on deep brown and appropriately adjusted accent colors.

### Implementation instructions

1. Analyze the ZIP archive and identify the visual characteristics of both games.
2. Summarize how the proposed art direction relates to the existing game themes.
3. Establish a consistent design system, including colors, typography, spacing, cards, buttons, and illustration styles.
4. Implement the design directly in the existing Vite and TypeScript project, preserving both games' functionality.
5. Verify that all pages, both language versions, both themes, and all responsive layouts work correctly.

**Expected result:** A distinctive, editorial, cream-and-terracotta website with expressive typography, humorous pigeon and cowboy illustrations, subtle pixel-art references, spacious layouts, and elegant game cards. It should feel like the website of a thoughtful, imaginative rehabilitation project that happens to use games—not like a conventional gaming portal. It should be accessible to users with disabilities and should be optimized for search engines. The website should be visually appealing and engaging, encouraging users to explore.

### Expected outcome

The final website should look and feel as though it was designed specifically for these two games. Its visual identity must be derived from the actual project files and existing game interfaces, rather than invented independently. Before implementing the design, briefly summarize the visual characteristics identified in each game and explain how they will inform the website's overall design system. Then implement the design directly in the existing project.

## Expected result

A complete, responsive, maintainable website that presents the project professionally, provides access to both existing subgames, documents the actual technologies used, and is ready to publish through GitHub Pages.

Preserve existing functionality, avoid unnecessary complexity, and prioritize a working production build over speculative features.