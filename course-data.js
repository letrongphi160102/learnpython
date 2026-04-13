// ============================================
// PYTHON MASTERY ACADEMY — Complete Course Data
// Comprehensive university-level Python curriculum
// ============================================

const COURSE_DATA = {
    title: "Python Mastery Academy",
    version: "2026",
    modules: [
        // =============================================
        // MODULE 1: INTRODUCTION & SETUP
        // =============================================
        {
            id: 1,
            title: "Introduction to Python & Setup",
            level: "beginner",
            icon: "🚀",
            description: "Understand what Python is, why it matters, and set up your development environment.",
            lessons: [
                {
                    id: "1-1",
                    title: "What is Python?",
                    duration: "15 min",
                    content: `
<h1>What is Python?</h1>
<div class="lesson-meta">
    <span>📘 Module 1 — Introduction</span>
    <span>⏱ 15 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>A Brief History</h2>
<p>Python was created by <strong>Guido van Rossum</strong> and first released in 1991. Named after the British comedy group Monty Python, it was designed to be simple, readable, and fun to use. Today, Python is one of the most popular programming languages in the world.</p>

<p>Python is a <strong>high-level, interpreted, general-purpose programming language</strong>. Let's break down what that means:</p>
<ul>
    <li><strong>High-level:</strong> Python abstracts away complex details like memory management, making it easier to write and understand code.</li>
    <li><strong>Interpreted:</strong> Python code is executed line by line by an interpreter, rather than being compiled to machine code first. This makes development and debugging faster.</li>
    <li><strong>General-purpose:</strong> Python can be used for virtually anything — web development, data science, AI, automation, scripting, game development, and more.</li>
</ul>

<h2>Why Learn Python?</h2>
<p>Python consistently ranks among the most popular programming languages. Here's why:</p>

<table>
    <thead>
        <tr><th>Advantage</th><th>Description</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>Easy to Learn</strong></td><td>Clean syntax that reads almost like English</td></tr>
        <tr><td><strong>Versatile</strong></td><td>Used in web, data science, AI, automation, and more</td></tr>
        <tr><td><strong>Large Community</strong></td><td>Millions of developers, extensive documentation, countless libraries</td></tr>
        <tr><td><strong>High Demand</strong></td><td>One of the most sought-after skills in tech jobs</td></tr>
        <tr><td><strong>Cross-platform</strong></td><td>Runs on Windows, macOS, Linux, and more</td></tr>
        <tr><td><strong>Rich Ecosystem</strong></td><td>Over 400,000+ packages on PyPI</td></tr>
    </tbody>
</table>

<h2>Python's Philosophy: The Zen of Python</h2>
<p>Python has a guiding philosophy captured in "The Zen of Python" (try typing <code>import this</code> in Python). Key principles include:</p>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">zen_of_python.py</span></div>
    <pre class="code-body"><code><span class="cm"># Type this in Python to see the complete Zen of Python</span>
<span class="kw">import</span> this

<span class="cm"># Key principles:</span>
<span class="cm"># Beautiful is better than ugly.</span>
<span class="cm"># Explicit is better than implicit.</span>
<span class="cm"># Simple is better than complex.</span>
<span class="cm"># Readability counts.</span></code></pre>
</div>

<h2>Where is Python Used?</h2>
<ul>
    <li><strong>Web Development:</strong> Django, Flask, FastAPI</li>
    <li><strong>Data Science & Analytics:</strong> Pandas, NumPy, Matplotlib</li>
    <li><strong>Machine Learning & AI:</strong> TensorFlow, PyTorch, scikit-learn</li>
    <li><strong>Automation & Scripting:</strong> Automate repetitive tasks, system administration</li>
    <li><strong>Game Development:</strong> Pygame</li>
    <li><strong>Desktop Applications:</strong> Tkinter, PyQt</li>
    <li><strong>DevOps & Cloud:</strong> AWS SDK, infrastructure automation</li>
</ul>

<div class="info-box tip">
    <div class="info-box-title">💡 Fun Fact</div>
    <p>Companies like Google, Netflix, Instagram, Spotify, Dropbox, and NASA all use Python extensively in their technology stacks.</p>
</div>
`
                },
                {
                    id: "1-2",
                    title: "Installing Python",
                    duration: "20 min",
                    content: `
<h1>Installing Python</h1>
<div class="lesson-meta">
    <span>📘 Module 1 — Introduction</span>
    <span>⏱ 20 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>Step 1: Download Python</h2>
<p>Visit the official Python website at <strong>python.org/downloads</strong> and download the latest version of Python 3. As of 2026, Python 3.12+ is recommended.</p>

<div class="info-box important">
    <div class="info-box-title">⚠️ Important</div>
    <p>Always use <strong>Python 3</strong>. Python 2 reached end-of-life on January 1, 2020, and should not be used for new projects.</p>
</div>

<h2>Step 2: Installation on Different Platforms</h2>

<h3>Windows</h3>
<ol>
    <li>Download the Windows installer from python.org</li>
    <li><strong>Check "Add Python to PATH"</strong> during installation — this is crucial!</li>
    <li>Click "Install Now" for the default installation</li>
    <li>Verify by opening Command Prompt and typing:</li>
</ol>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">terminal</span></div>
    <pre class="code-body"><code>python --version
<span class="cm"># Output: Python 3.12.x</span>

pip --version
<span class="cm"># Output: pip 24.x from ...</span></code></pre>
</div>

<h3>macOS</h3>
<ol>
    <li>macOS comes with Python 2 pre-installed, but you need Python 3</li>
    <li>Install via Homebrew (recommended): <code>brew install python</code></li>
    <li>Or download from python.org</li>
    <li>Verify: <code>python3 --version</code></li>
</ol>

<h3>Linux</h3>
<ol>
    <li>Most Linux distributions come with Python 3 pre-installed</li>
    <li>If not: <code>sudo apt install python3 python3-pip</code> (Ubuntu/Debian)</li>
    <li>Verify: <code>python3 --version</code></li>
</ol>

<h2>Step 3: Choose an IDE or Editor</h2>
<p>A good code editor makes programming much more enjoyable. Here are the top recommendations:</p>

<table>
    <thead>
        <tr><th>Editor</th><th>Best For</th><th>Key Features</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>VS Code</strong></td><td>General development</td><td>Free, extensions, integrated terminal, Git support</td></tr>
        <tr><td><strong>PyCharm</strong></td><td>Professional Python dev</td><td>Advanced debugging, refactoring, built-in tools</td></tr>
        <tr><td><strong>Jupyter Notebook</strong></td><td>Data science, learning</td><td>Interactive, inline output, markdown support</td></tr>
        <tr><td><strong>IDLE</strong></td><td>Beginners</td><td>Comes with Python, simple interface</td></tr>
    </tbody>
</table>

<div class="info-box tip">
    <div class="info-box-title">💡 Recommendation</div>
    <p>For this course, we recommend <strong>VS Code</strong> with the Python extension. It's free, powerful, and widely used in the industry. Install the "Python" extension by Microsoft for the best experience.</p>
</div>

<h2>Step 4: Your First Python Program</h2>
<p>Let's verify everything works by running your very first Python program:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">hello.py</span></div>
    <pre class="code-body"><code><span class="cm"># My first Python program!</span>
<span class="bi">print</span>(<span class="str">"Hello, World!"</span>)
<span class="bi">print</span>(<span class="str">"Welcome to Python Mastery Academy!"</span>)

<span class="cm"># Let's do some simple math</span>
<span class="bi">print</span>(<span class="str">"2 + 3 ="</span>, <span class="num">2</span> + <span class="num">3</span>)
<span class="bi">print</span>(<span class="str">"Python version check complete! ✓"</span>)</code></pre>
</div>

<p>Save this as <code>hello.py</code> and run it from your terminal:</p>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">terminal</span></div>
    <pre class="code-body"><code>python hello.py
<span class="cm"># Output:</span>
<span class="cm"># Hello, World!</span>
<span class="cm"># Welcome to Python Mastery Academy!</span>
<span class="cm"># 2 + 3 = 5</span>
<span class="cm"># Python version check complete! ✓</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 1.1: Set Up Your Environment</h4>
    </div>
    <ol>
        <li>Install Python 3 on your computer</li>
        <li>Install VS Code and the Python extension</li>
        <li>Create a file called <code>hello.py</code></li>
        <li>Write a program that prints your name and your favorite programming language</li>
        <li>Run the program and verify it works</li>
    </ol>
</div>
`
                },
                {
                    id: "1-3",
                    title: "Python Interactive Shell & Scripts",
                    duration: "15 min",
                    content: `
<h1>Python Interactive Shell & Scripts</h1>
<div class="lesson-meta">
    <span>📘 Module 1 — Introduction</span>
    <span>⏱ 15 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>The Python Interactive Shell (REPL)</h2>
<p>Python provides an interactive shell, also known as REPL (Read-Eval-Print Loop). It's perfect for quick experiments, testing code snippets, and learning.</p>

<p>To start the interactive shell, simply type <code>python</code> (or <code>python3</code>) in your terminal:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">Python Shell</span></div>
    <pre class="code-body"><code>>>> <span class="bi">print</span>(<span class="str">"Hello from the shell!"</span>)
Hello from the shell!

>>> <span class="num">42</span> * <span class="num">7</span>
294

>>> name = <span class="str">"Python Academy"</span>
>>> <span class="bi">print</span>(<span class="str">f"Welcome to </span>{name}<span class="str">"</span>)
Welcome to Python Academy

>>> <span class="bi">exit</span>()  <span class="cm"># To quit the shell</span></code></pre>
</div>

<h2>Python Scripts</h2>
<p>For real programs, you write Python code in <code>.py</code> files and run them from the terminal. This is how professional software is built.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">my_script.py</span></div>
    <pre class="code-body"><code><span class="cm"># This is a Python script</span>
<span class="cm"># Save this in a .py file and run it</span>

<span class="cm"># Variables</span>
course_name = <span class="str">"Python Mastery"</span>
version = <span class="num">3.12</span>

<span class="cm"># Output</span>
<span class="bi">print</span>(<span class="str">f"Course: </span>{course_name}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Python Version: </span>{version}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">"Let's begin learning!"</span>)</code></pre>
</div>

<h2>Comments in Python</h2>
<p>Comments are notes in your code that Python ignores. They help explain your code to others (and your future self).</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">comments.py</span></div>
    <pre class="code-body"><code><span class="cm"># This is a single-line comment</span>

<span class="cm"># You can use comments to explain complex logic</span>
total = <span class="num">100</span> * <span class="num">0.08</span>  <span class="cm"># Calculate 8% tax</span>

<span class="str">"""
This is a multi-line comment (docstring).
It can span multiple lines.
Often used at the start of functions to describe them.
"""</span>

<span class="bi">print</span>(total)  <span class="cm"># Outputs: 8.0</span></code></pre>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 Best Practice</div>
    <p>Write comments to explain <em>why</em> you're doing something, not <em>what</em> you're doing. The code itself should be readable enough to show what it does.</p>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 2: VARIABLES & DATA TYPES
        // =============================================
        {
            id: 2,
            title: "Variables & Data Types",
            level: "beginner",
            icon: "📦",
            description: "Learn about variables, numbers, strings, booleans, and type conversion — the building blocks of all programs.",
            lessons: [
                {
                    id: "2-1",
                    title: "Variables & Assignment",
                    duration: "20 min",
                    content: `
<h1>Variables & Assignment</h1>
<div class="lesson-meta">
    <span>📘 Module 2 — Variables & Data Types</span>
    <span>⏱ 20 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>What are Variables?</h2>
<p>A variable is a named container that stores data in memory. Think of it as a labeled box where you can put a value and retrieve it later.</p>

<p>In Python, you create a variable simply by assigning a value to a name using the <code>=</code> operator:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">variables.py</span></div>
    <pre class="code-body"><code><span class="cm"># Creating variables</span>
name = <span class="str">"Alice"</span>
age = <span class="num">25</span>
height = <span class="num">5.7</span>
is_student = <span class="bool">True</span>

<span class="cm"># Using variables</span>
<span class="bi">print</span>(<span class="str">f"Name: </span>{name}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Age: </span>{age}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Height: </span>{height}<span class="str"> ft"</span>)
<span class="bi">print</span>(<span class="str">f"Student: </span>{is_student}<span class="str">"</span>)</code></pre>
</div>

<div class="info-box note">
    <div class="info-box-title">📝 Note: Dynamic Typing</div>
    <p>Python is <strong>dynamically typed</strong>, meaning you don't need to declare the type of a variable — Python figures it out automatically. A variable can even change its type during runtime.</p>
</div>

<h2>Variable Naming Rules</h2>
<p>Follow these rules when naming variables:</p>
<ul>
    <li>Must start with a letter (a-z, A-Z) or underscore (_)</li>
    <li>Can contain letters, digits (0-9), and underscores</li>
    <li>Case-sensitive: <code>Name</code>, <code>name</code>, and <code>NAME</code> are different variables</li>
    <li>Cannot use Python reserved keywords (like <code>if</code>, <code>for</code>, <code>class</code>, etc.)</li>
</ul>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">naming.py</span></div>
    <pre class="code-body"><code><span class="cm"># ✅ Good variable names (snake_case convention)</span>
first_name = <span class="str">"John"</span>
total_price = <span class="num">29.99</span>
is_active = <span class="bool">True</span>
student_count = <span class="num">42</span>
MAX_RETRY = <span class="num">3</span>          <span class="cm"># Constants use UPPER_CASE</span>

<span class="cm"># ❌ Invalid variable names</span>
<span class="cm"># 2name = "error"      # Cannot start with a number</span>
<span class="cm"># my-name = "error"    # Hyphens not allowed</span>
<span class="cm"># class = "error"      # Reserved keyword</span></code></pre>
</div>

<h2>Multiple Assignment</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">multiple_assignment.py</span></div>
    <pre class="code-body"><code><span class="cm"># Assign multiple variables at once</span>
x, y, z = <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>
<span class="bi">print</span>(x, y, z)  <span class="cm"># 1 2 3</span>

<span class="cm"># Assign the same value to multiple variables</span>
a = b = c = <span class="num">0</span>
<span class="bi">print</span>(a, b, c)  <span class="cm"># 0 0 0</span>

<span class="cm"># Swap variables (Pythonic way)</span>
a, b = <span class="num">10</span>, <span class="num">20</span>
a, b = b, a
<span class="bi">print</span>(a, b)  <span class="cm"># 20 10</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 2.1: Variable Practice</h4>
    </div>
    <ol>
        <li>Create variables for your name, age, height, and whether you like pizza (boolean)</li>
        <li>Print all variables using f-strings</li>
        <li>Swap two variables without using a temporary variable</li>
        <li>Create a constant for PI and use it to calculate the area of a circle</li>
    </ol>
</div>
`
                },
                {
                    id: "2-2",
                    title: "Numbers (int, float, complex)",
                    duration: "25 min",
                    content: `
<h1>Numbers in Python</h1>
<div class="lesson-meta">
    <span>📘 Module 2 — Variables & Data Types</span>
    <span>⏱ 25 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>Numeric Types</h2>
<p>Python has three numeric types:</p>

<table>
    <thead>
        <tr><th>Type</th><th>Description</th><th>Example</th></tr>
    </thead>
    <tbody>
        <tr><td><code>int</code></td><td>Integer (whole number)</td><td><code>42</code>, <code>-17</code>, <code>0</code></td></tr>
        <tr><td><code>float</code></td><td>Floating point (decimal)</td><td><code>3.14</code>, <code>-0.001</code>, <code>2.0</code></td></tr>
        <tr><td><code>complex</code></td><td>Complex number</td><td><code>3+4j</code>, <code>1j</code></td></tr>
    </tbody>
</table>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">numbers.py</span></div>
    <pre class="code-body"><code><span class="cm"># Integers - unlimited precision in Python!</span>
age = <span class="num">25</span>
big_number = <span class="num">1_000_000</span>     <span class="cm"># Underscores for readability</span>
negative = -<span class="num">42</span>
binary = <span class="num">0b1010</span>           <span class="cm"># Binary: 10</span>
octal = <span class="num">0o17</span>              <span class="cm"># Octal: 15</span>
hexadecimal = <span class="num">0xFF</span>        <span class="cm"># Hexadecimal: 255</span>

<span class="cm"># Floats</span>
pi = <span class="num">3.14159</span>
temperature = -<span class="num">40.0</span>
scientific = <span class="num">1.5e10</span>       <span class="cm"># 1.5 × 10^10</span>

<span class="cm"># Complex numbers</span>
z = <span class="num">3</span> + <span class="num">4j</span>
<span class="bi">print</span>(z.real)    <span class="cm"># 3.0</span>
<span class="bi">print</span>(z.imag)    <span class="cm"># 4.0</span></code></pre>
</div>

<h2>Arithmetic Operators</h2>
<table>
    <thead>
        <tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr>
    </thead>
    <tbody>
        <tr><td><code>+</code></td><td>Addition</td><td><code>5 + 3</code></td><td><code>8</code></td></tr>
        <tr><td><code>-</code></td><td>Subtraction</td><td><code>10 - 4</code></td><td><code>6</code></td></tr>
        <tr><td><code>*</code></td><td>Multiplication</td><td><code>7 * 3</code></td><td><code>21</code></td></tr>
        <tr><td><code>/</code></td><td>Division</td><td><code>15 / 4</code></td><td><code>3.75</code></td></tr>
        <tr><td><code>//</code></td><td>Floor Division</td><td><code>15 // 4</code></td><td><code>3</code></td></tr>
        <tr><td><code>%</code></td><td>Modulus</td><td><code>15 % 4</code></td><td><code>3</code></td></tr>
        <tr><td><code>**</code></td><td>Exponentiation</td><td><code>2 ** 10</code></td><td><code>1024</code></td></tr>
    </tbody>
</table>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">arithmetic.py</span></div>
    <pre class="code-body"><code><span class="cm"># Basic arithmetic</span>
<span class="bi">print</span>(<span class="num">10</span> + <span class="num">3</span>)    <span class="cm"># 13</span>
<span class="bi">print</span>(<span class="num">10</span> - <span class="num">3</span>)    <span class="cm"># 7</span>
<span class="bi">print</span>(<span class="num">10</span> * <span class="num">3</span>)    <span class="cm"># 30</span>
<span class="bi">print</span>(<span class="num">10</span> / <span class="num">3</span>)    <span class="cm"># 3.3333...</span>
<span class="bi">print</span>(<span class="num">10</span> // <span class="num">3</span>)   <span class="cm"># 3 (floor division)</span>
<span class="bi">print</span>(<span class="num">10</span> % <span class="num">3</span>)    <span class="cm"># 1 (remainder)</span>
<span class="bi">print</span>(<span class="num">2</span> ** <span class="num">8</span>)    <span class="cm"># 256 (power)</span>

<span class="cm"># Augmented assignment operators</span>
x = <span class="num">10</span>
x += <span class="num">5</span>    <span class="cm"># x = x + 5 → 15</span>
x -= <span class="num">3</span>    <span class="cm"># x = x - 3 → 12</span>
x *= <span class="num">2</span>    <span class="cm"># x = x * 2 → 24</span>
x /= <span class="num">4</span>    <span class="cm"># x = x / 4 → 6.0</span>
<span class="bi">print</span>(x)   <span class="cm"># 6.0</span>

<span class="cm"># Built-in math functions</span>
<span class="bi">print</span>(<span class="bi">abs</span>(-<span class="num">42</span>))       <span class="cm"># 42</span>
<span class="bi">print</span>(<span class="bi">round</span>(<span class="num">3.7</span>))     <span class="cm"># 4</span>
<span class="bi">print</span>(<span class="bi">round</span>(<span class="num">3.14159</span>, <span class="num">2</span>))  <span class="cm"># 3.14</span>
<span class="bi">print</span>(<span class="bi">max</span>(<span class="num">1</span>, <span class="num">5</span>, <span class="num">3</span>))    <span class="cm"># 5</span>
<span class="bi">print</span>(<span class="bi">min</span>(<span class="num">1</span>, <span class="num">5</span>, <span class="num">3</span>))    <span class="cm"># 1</span>
<span class="bi">print</span>(<span class="bi">pow</span>(<span class="num">2</span>, <span class="num">10</span>))      <span class="cm"># 1024</span></code></pre>
</div>

<h2>The math Module</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">math_module.py</span></div>
    <pre class="code-body"><code><span class="kw">import</span> math

<span class="bi">print</span>(math.pi)         <span class="cm"># 3.141592653589793</span>
<span class="bi">print</span>(math.e)          <span class="cm"># 2.718281828459045</span>
<span class="bi">print</span>(math.sqrt(<span class="num">16</span>))   <span class="cm"># 4.0</span>
<span class="bi">print</span>(math.ceil(<span class="num">3.2</span>))  <span class="cm"># 4</span>
<span class="bi">print</span>(math.floor(<span class="num">3.9</span>)) <span class="cm"># 3</span>
<span class="bi">print</span>(math.log(<span class="num">100</span>, <span class="num">10</span>))  <span class="cm"># 2.0</span>
<span class="bi">print</span>(math.factorial(<span class="num">5</span>))   <span class="cm"># 120</span></code></pre>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ Float Precision</div>
    <p>Floating-point numbers have limited precision. <code>0.1 + 0.2</code> gives <code>0.30000000000000004</code>, not <code>0.3</code>. For financial calculations, use the <code>decimal</code> module.</p>
</div>
`
                },
                {
                    id: "2-3",
                    title: "Strings & String Methods",
                    duration: "30 min",
                    content: `
<h1>Strings & String Methods</h1>
<div class="lesson-meta">
    <span>📘 Module 2 — Variables & Data Types</span>
    <span>⏱ 30 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>Creating Strings</h2>
<p>Strings are sequences of characters. In Python, you can create strings using single quotes, double quotes, or triple quotes:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">strings.py</span></div>
    <pre class="code-body"><code><span class="cm"># Different ways to create strings</span>
single = <span class="str">'Hello'</span>
double = <span class="str">"Hello"</span>
triple = <span class="str">"""This is a
multi-line string"""</span>

<span class="cm"># Escape characters</span>
newline = <span class="str">"First line\\nSecond line"</span>
tab = <span class="str">"Column1\\tColumn2"</span>
quote = <span class="str">"She said \\"hello\\""</span>
backslash = <span class="str">"C:\\\\Users\\\\folder"</span>

<span class="cm"># Raw strings (ignore escape characters)</span>
path = <span class="str">r"C:\\Users\\folder\\file.txt"</span></code></pre>
</div>

<h2>String Operations</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">string_ops.py</span></div>
    <pre class="code-body"><code><span class="cm"># Concatenation</span>
first = <span class="str">"Hello"</span>
last = <span class="str">"World"</span>
full = first + <span class="str">" "</span> + last  <span class="cm"># "Hello World"</span>

<span class="cm"># Repetition</span>
line = <span class="str">"-"</span> * <span class="num">40</span>  <span class="cm"># "----------------------------------------"</span>

<span class="cm"># Length</span>
<span class="bi">print</span>(<span class="bi">len</span>(<span class="str">"Python"</span>))  <span class="cm"># 6</span>

<span class="cm"># Membership</span>
<span class="bi">print</span>(<span class="str">"Py"</span> <span class="kw">in</span> <span class="str">"Python"</span>)     <span class="cm"># True</span>
<span class="bi">print</span>(<span class="str">"java"</span> <span class="kw">not in</span> <span class="str">"Python"</span>)  <span class="cm"># True</span></code></pre>
</div>

<h2>String Indexing & Slicing</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">slicing.py</span></div>
    <pre class="code-body"><code>text = <span class="str">"Python"</span>
<span class="cm">#        P  y  t  h  o  n</span>
<span class="cm"># Index: 0  1  2  3  4  5</span>
<span class="cm"># Neg:  -6 -5 -4 -3 -2 -1</span>

<span class="cm"># Indexing (single character)</span>
<span class="bi">print</span>(text[<span class="num">0</span>])    <span class="cm"># "P"</span>
<span class="bi">print</span>(text[-<span class="num">1</span>])   <span class="cm"># "n"</span>

<span class="cm"># Slicing [start:stop:step]</span>
<span class="bi">print</span>(text[<span class="num">0</span>:<span class="num">3</span>])   <span class="cm"># "Pyt"</span>
<span class="bi">print</span>(text[<span class="num">2</span>:])    <span class="cm"># "thon"</span>
<span class="bi">print</span>(text[:<span class="num">4</span>])    <span class="cm"># "Pyth"</span>
<span class="bi">print</span>(text[::-<span class="num">1</span>])  <span class="cm"># "nohtyP" (reversed)</span>
<span class="bi">print</span>(text[::<span class="num">2</span>])   <span class="cm"># "Pto" (every 2nd char)</span></code></pre>
</div>

<h2>Essential String Methods</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">string_methods.py</span></div>
    <pre class="code-body"><code>text = <span class="str">"  Hello, Python World!  "</span>

<span class="cm"># Case methods</span>
<span class="bi">print</span>(text.upper())       <span class="cm"># "  HELLO, PYTHON WORLD!  "</span>
<span class="bi">print</span>(text.lower())       <span class="cm"># "  hello, python world!  "</span>
<span class="bi">print</span>(text.title())       <span class="cm"># "  Hello, Python World!  "</span>
<span class="bi">print</span>(text.capitalize())  <span class="cm"># "  hello, python world!  "</span>
<span class="bi">print</span>(text.swapcase())    <span class="cm"># "  hELLO, pYTHON wORLD!  "</span>

<span class="cm"># Whitespace</span>
<span class="bi">print</span>(text.strip())    <span class="cm"># "Hello, Python World!"</span>
<span class="bi">print</span>(text.lstrip())   <span class="cm"># "Hello, Python World!  "</span>
<span class="bi">print</span>(text.rstrip())   <span class="cm"># "  Hello, Python World!"</span>

<span class="cm"># Search</span>
<span class="bi">print</span>(text.find(<span class="str">"Python"</span>))    <span class="cm"># 9</span>
<span class="bi">print</span>(text.count(<span class="str">"o"</span>))        <span class="cm"># 2</span>
<span class="bi">print</span>(text.startswith(<span class="str">"  H"</span>))  <span class="cm"># True</span>
<span class="bi">print</span>(text.endswith(<span class="str">"!  "</span>))    <span class="cm"># True</span>

<span class="cm"># Replace & Split</span>
<span class="bi">print</span>(text.replace(<span class="str">"Python"</span>, <span class="str">"Java"</span>))
words = <span class="str">"one,two,three"</span>.split(<span class="str">","</span>)
<span class="bi">print</span>(words)  <span class="cm"># ['one', 'two', 'three']</span>

<span class="cm"># Join</span>
<span class="bi">print</span>(<span class="str">" - "</span>.join(words))  <span class="cm"># "one - two - three"</span>

<span class="cm"># Checking</span>
<span class="bi">print</span>(<span class="str">"abc123"</span>.isalnum())    <span class="cm"># True</span>
<span class="bi">print</span>(<span class="str">"abc"</span>.isalpha())       <span class="cm"># True</span>
<span class="bi">print</span>(<span class="str">"123"</span>.isdigit())       <span class="cm"># True</span>
<span class="bi">print</span>(<span class="str">"hello"</span>.islower())     <span class="cm"># True</span></code></pre>
</div>

<h2>String Formatting (f-strings)</h2>
<p>F-strings (formatted string literals) are the modern, preferred way to format strings in Python:</p>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">fstrings.py</span></div>
    <pre class="code-body"><code>name = <span class="str">"Alice"</span>
age = <span class="num">30</span>
price = <span class="num">49.99</span>

<span class="cm"># Basic f-string</span>
<span class="bi">print</span>(<span class="str">f"Name: </span>{name}<span class="str">, Age: </span>{age}<span class="str">"</span>)

<span class="cm"># Expressions inside f-strings</span>
<span class="bi">print</span>(<span class="str">f"Next year: </span>{age + <span class="num">1</span>}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Upper: </span>{name.upper()}<span class="str">"</span>)

<span class="cm"># Number formatting</span>
<span class="bi">print</span>(<span class="str">f"Price: $</span>{price:<span class="num">.2f</span>}<span class="str">"</span>)      <span class="cm"># Price: $49.99</span>
<span class="bi">print</span>(<span class="str">f"Big: </span>{<span class="num">1000000</span>:<span class="num">,</span>}<span class="str">"</span>)         <span class="cm"># Big: 1,000,000</span>
<span class="bi">print</span>(<span class="str">f"Percent: </span>{<span class="num">0.856</span>:<span class="num">.1%</span>}<span class="str">"</span>)     <span class="cm"># Percent: 85.6%</span>
<span class="bi">print</span>(<span class="str">f"Padded: </span>{<span class="num">42</span>:<span class="num">05d</span>}<span class="str">"</span>)          <span class="cm"># Padded: 00042</span>

<span class="cm"># Alignment</span>
<span class="bi">print</span>(<span class="str">f"</span>{<span class="str">'left'</span>:<span class="num">&lt;15</span>}<span class="str">|"</span>)    <span class="cm"># "left           |"</span>
<span class="bi">print</span>(<span class="str">f"</span>{<span class="str">'center'</span>:<span class="num">^15</span>}<span class="str">|"</span>)  <span class="cm"># "    center     |"</span>
<span class="bi">print</span>(<span class="str">f"</span>{<span class="str">'right'</span>:<span class="num">&gt;15</span>}<span class="str">|"</span>)   <span class="cm"># "          right|"</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 2.3: String Mastery</h4>
    </div>
    <ol>
        <li>Write a program that takes a sentence and counts vowels, consonants, and spaces</li>
        <li>Reverse a string without using [::-1]</li>
        <li>Check if a string is a palindrome (reads the same forwards and backwards)</li>
        <li>Format a receipt: align item names left, prices right, with a total at the bottom</li>
    </ol>
</div>
`
                },
                {
                    id: "2-4",
                    title: "Booleans & Type Conversion",
                    duration: "15 min",
                    content: `
<h1>Booleans & Type Conversion</h1>
<div class="lesson-meta">
    <span>📘 Module 2 — Variables & Data Types</span>
    <span>⏱ 15 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>Boolean Values</h2>
<p>Booleans represent truth values: <code>True</code> or <code>False</code>. They are fundamental to decision-making in programs.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">booleans.py</span></div>
    <pre class="code-body"><code><span class="cm"># Boolean values</span>
is_active = <span class="bool">True</span>
is_deleted = <span class="bool">False</span>

<span class="cm"># Comparison operators return booleans</span>
<span class="bi">print</span>(<span class="num">5</span> > <span class="num">3</span>)     <span class="cm"># True</span>
<span class="bi">print</span>(<span class="num">5</span> == <span class="num">3</span>)    <span class="cm"># False</span>
<span class="bi">print</span>(<span class="num">5</span> != <span class="num">3</span>)    <span class="cm"># True</span>
<span class="bi">print</span>(<span class="num">5</span> >= <span class="num">5</span>)    <span class="cm"># True</span>
<span class="bi">print</span>(<span class="num">5</span> <= <span class="num">3</span>)    <span class="cm"># False</span>

<span class="cm"># Logical operators</span>
<span class="bi">print</span>(<span class="bool">True</span> <span class="kw">and</span> <span class="bool">True</span>)     <span class="cm"># True</span>
<span class="bi">print</span>(<span class="bool">True</span> <span class="kw">and</span> <span class="bool">False</span>)    <span class="cm"># False</span>
<span class="bi">print</span>(<span class="bool">True</span> <span class="kw">or</span> <span class="bool">False</span>)     <span class="cm"># True</span>
<span class="bi">print</span>(<span class="kw">not</span> <span class="bool">True</span>)           <span class="cm"># False</span>

<span class="cm"># Truthy and Falsy values</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="num">0</span>))        <span class="cm"># False</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="str">""</span>))       <span class="cm"># False</span>
<span class="bi">print</span>(<span class="bi">bool</span>([]))       <span class="cm"># False</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="none">None</span>))     <span class="cm"># False</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="num">42</span>))       <span class="cm"># True</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="str">"hello"</span>))  <span class="cm"># True</span>
<span class="bi">print</span>(<span class="bi">bool</span>([<span class="num">1</span>,<span class="num">2</span>]))   <span class="cm"># True</span></code></pre>
</div>

<h2>Type Conversion (Casting)</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">type_casting.py</span></div>
    <pre class="code-body"><code><span class="cm"># Check type</span>
<span class="bi">print</span>(<span class="bi">type</span>(<span class="num">42</span>))        <span class="cm"># &lt;class 'int'&gt;</span>
<span class="bi">print</span>(<span class="bi">type</span>(<span class="num">3.14</span>))      <span class="cm"># &lt;class 'float'&gt;</span>
<span class="bi">print</span>(<span class="bi">type</span>(<span class="str">"hello"</span>))   <span class="cm"># &lt;class 'str'&gt;</span>
<span class="bi">print</span>(<span class="bi">type</span>(<span class="bool">True</span>))      <span class="cm"># &lt;class 'bool'&gt;</span>

<span class="cm"># Type conversion</span>
<span class="bi">print</span>(<span class="bi">int</span>(<span class="str">"42"</span>))       <span class="cm"># 42</span>
<span class="bi">print</span>(<span class="bi">int</span>(<span class="num">3.9</span>))        <span class="cm"># 3 (truncates, doesn't round)</span>
<span class="bi">print</span>(<span class="bi">float</span>(<span class="str">"3.14"</span>))   <span class="cm"># 3.14</span>
<span class="bi">print</span>(<span class="bi">float</span>(<span class="num">42</span>))       <span class="cm"># 42.0</span>
<span class="bi">print</span>(<span class="bi">str</span>(<span class="num">42</span>))         <span class="cm"># "42"</span>
<span class="bi">print</span>(<span class="bi">str</span>(<span class="num">3.14</span>))       <span class="cm"># "3.14"</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="num">1</span>))         <span class="cm"># True</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="num">0</span>))         <span class="cm"># False</span>

<span class="cm"># Practical example: user input</span>
<span class="cm"># age = int(input("Enter your age: "))</span>
<span class="cm"># height = float(input("Enter height: "))</span></code></pre>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ Common Error</div>
    <p>Converting an invalid string to a number raises a <code>ValueError</code>: <code>int("hello")</code> will crash. Always validate input before converting.</p>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 3: CONTROL FLOW
        // =============================================
        {
            id: 3,
            title: "Control Flow",
            level: "beginner",
            icon: "🔀",
            description: "Master if/elif/else statements, for loops, while loops, and control flow tools like break, continue, and pass.",
            lessons: [
                {
                    id: "3-1",
                    title: "Conditional Statements (if/elif/else)",
                    duration: "25 min",
                    content: `
<h1>Conditional Statements</h1>
<div class="lesson-meta">
    <span>📘 Module 3 — Control Flow</span>
    <span>⏱ 25 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>The if Statement</h2>
<p>Conditional statements let your program make decisions based on conditions. Python uses <strong>indentation</strong> (typically 4 spaces) to define code blocks.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">conditionals.py</span></div>
    <pre class="code-body"><code><span class="cm"># Simple if statement</span>
age = <span class="num">18</span>

<span class="kw">if</span> age >= <span class="num">18</span>:
    <span class="bi">print</span>(<span class="str">"You are an adult"</span>)

<span class="cm"># if-else</span>
temperature = <span class="num">35</span>

<span class="kw">if</span> temperature > <span class="num">30</span>:
    <span class="bi">print</span>(<span class="str">"It's hot outside! 🔥"</span>)
<span class="kw">else</span>:
    <span class="bi">print</span>(<span class="str">"It's comfortable 😊"</span>)

<span class="cm"># if-elif-else (multiple conditions)</span>
score = <span class="num">85</span>

<span class="kw">if</span> score >= <span class="num">90</span>:
    grade = <span class="str">"A"</span>
<span class="kw">elif</span> score >= <span class="num">80</span>:
    grade = <span class="str">"B"</span>
<span class="kw">elif</span> score >= <span class="num">70</span>:
    grade = <span class="str">"C"</span>
<span class="kw">elif</span> score >= <span class="num">60</span>:
    grade = <span class="str">"D"</span>
<span class="kw">else</span>:
    grade = <span class="str">"F"</span>

<span class="bi">print</span>(<span class="str">f"Score: </span>{score}<span class="str"> → Grade: </span>{grade}<span class="str">"</span>)</code></pre>
</div>

<h2>Nested Conditionals</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">nested.py</span></div>
    <pre class="code-body"><code>age = <span class="num">25</span>
has_license = <span class="bool">True</span>

<span class="kw">if</span> age >= <span class="num">18</span>:
    <span class="kw">if</span> has_license:
        <span class="bi">print</span>(<span class="str">"You can drive! 🚗"</span>)
    <span class="kw">else</span>:
        <span class="bi">print</span>(<span class="str">"Get a license first!"</span>)
<span class="kw">else</span>:
    <span class="bi">print</span>(<span class="str">"Too young to drive"</span>)

<span class="cm"># Better: combine with logical operators</span>
<span class="kw">if</span> age >= <span class="num">18</span> <span class="kw">and</span> has_license:
    <span class="bi">print</span>(<span class="str">"You can drive! 🚗"</span>)</code></pre>
</div>

<h2>Ternary Operator (Conditional Expression)</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">ternary.py</span></div>
    <pre class="code-body"><code><span class="cm"># Syntax: value_if_true if condition else value_if_false</span>
age = <span class="num">20</span>
status = <span class="str">"adult"</span> <span class="kw">if</span> age >= <span class="num">18</span> <span class="kw">else</span> <span class="str">"minor"</span>
<span class="bi">print</span>(status)  <span class="cm"># "adult"</span>

<span class="cm"># Real-world: setting defaults</span>
user_input = <span class="str">""</span>
name = user_input <span class="kw">if</span> user_input <span class="kw">else</span> <span class="str">"Anonymous"</span>
<span class="bi">print</span>(name)  <span class="cm"># "Anonymous"</span></code></pre>
</div>

<h2>Match Statement (Python 3.10+)</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">match.py</span></div>
    <pre class="code-body"><code><span class="cm"># Structural pattern matching (like switch-case)</span>
command = <span class="str">"quit"</span>

<span class="kw">match</span> command:
    <span class="kw">case</span> <span class="str">"start"</span>:
        <span class="bi">print</span>(<span class="str">"Starting..."</span>)
    <span class="kw">case</span> <span class="str">"stop"</span>:
        <span class="bi">print</span>(<span class="str">"Stopping..."</span>)
    <span class="kw">case</span> <span class="str">"quit"</span> | <span class="str">"exit"</span>:
        <span class="bi">print</span>(<span class="str">"Goodbye! 👋"</span>)
    <span class="kw">case</span> _:
        <span class="bi">print</span>(<span class="str">"Unknown command"</span>)</code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 3.1: Decision Making</h4>
    </div>
    <ol>
        <li>Write a program that determines if a year is a leap year</li>
        <li>Create a simple calculator that takes two numbers and an operator (+, -, *, /) and performs the calculation</li>
        <li>Write a program that categorizes a BMI value (underweight, normal, overweight, obese)</li>
    </ol>
</div>
`
                },
                {
                    id: "3-2",
                    title: "Loops (for & while)",
                    duration: "30 min",
                    content: `
<h1>Loops in Python</h1>
<div class="lesson-meta">
    <span>📘 Module 3 — Control Flow</span>
    <span>⏱ 30 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>The for Loop</h2>
<p>For loops iterate over a sequence (list, string, range, etc.):</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">for_loops.py</span></div>
    <pre class="code-body"><code><span class="cm"># Iterate over a list</span>
fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
<span class="kw">for</span> fruit <span class="kw">in</span> fruits:
    <span class="bi">print</span>(<span class="str">f"I like </span>{fruit}<span class="str">"</span>)

<span class="cm"># Iterate over a string</span>
<span class="kw">for</span> char <span class="kw">in</span> <span class="str">"Python"</span>:
    <span class="bi">print</span>(char, end=<span class="str">" "</span>)  <span class="cm"># P y t h o n</span>

<span class="cm"># Using range()</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="bi">range</span>(<span class="num">5</span>):
    <span class="bi">print</span>(i)  <span class="cm"># 0, 1, 2, 3, 4</span>

<span class="kw">for</span> i <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1</span>, <span class="num">11</span>):
    <span class="bi">print</span>(i)  <span class="cm"># 1 to 10</span>

<span class="kw">for</span> i <span class="kw">in</span> <span class="bi">range</span>(<span class="num">0</span>, <span class="num">20</span>, <span class="num">3</span>):
    <span class="bi">print</span>(i)  <span class="cm"># 0, 3, 6, 9, 12, 15, 18</span>

<span class="cm"># enumerate() — get index and value</span>
colors = [<span class="str">"red"</span>, <span class="str">"green"</span>, <span class="str">"blue"</span>]
<span class="kw">for</span> index, color <span class="kw">in</span> <span class="bi">enumerate</span>(colors):
    <span class="bi">print</span>(<span class="str">f"</span>{index}<span class="str">: </span>{color}<span class="str">"</span>)

<span class="cm"># zip() — iterate over multiple sequences</span>
names = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>]
ages = [<span class="num">25</span>, <span class="num">30</span>]
<span class="kw">for</span> name, age <span class="kw">in</span> <span class="bi">zip</span>(names, ages):
    <span class="bi">print</span>(<span class="str">f"</span>{name}<span class="str"> is </span>{age}<span class="str">"</span>)</code></pre>
</div>

<h2>The while Loop</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">while_loops.py</span></div>
    <pre class="code-body"><code><span class="cm"># Basic while loop</span>
count = <span class="num">0</span>
<span class="kw">while</span> count < <span class="num">5</span>:
    <span class="bi">print</span>(<span class="str">f"Count: </span>{count}<span class="str">"</span>)
    count += <span class="num">1</span>

<span class="cm"># Countdown</span>
countdown = <span class="num">10</span>
<span class="kw">while</span> countdown > <span class="num">0</span>:
    <span class="bi">print</span>(countdown, end=<span class="str">" "</span>)
    countdown -= <span class="num">1</span>
<span class="bi">print</span>(<span class="str">"🚀 Liftoff!"</span>)

<span class="cm"># Input validation loop</span>
<span class="cm"># while True:</span>
<span class="cm">#     age = input("Enter age (1-120): ")</span>
<span class="cm">#     if age.isdigit() and 1 <= int(age) <= 120:</span>
<span class="cm">#         break</span>
<span class="cm">#     print("Invalid! Try again.")</span></code></pre>
</div>

<h2>Loop Control: break, continue, else</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">loop_control.py</span></div>
    <pre class="code-body"><code><span class="cm"># break — exit the loop immediately</span>
<span class="kw">for</span> num <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1</span>, <span class="num">100</span>):
    <span class="kw">if</span> num == <span class="num">5</span>:
        <span class="kw">break</span>
    <span class="bi">print</span>(num)  <span class="cm"># 1, 2, 3, 4</span>

<span class="cm"># continue — skip to next iteration</span>
<span class="kw">for</span> num <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1</span>, <span class="num">11</span>):
    <span class="kw">if</span> num % <span class="num">2</span> == <span class="num">0</span>:
        <span class="kw">continue</span>
    <span class="bi">print</span>(num)  <span class="cm"># 1, 3, 5, 7, 9 (odd numbers only)</span>

<span class="cm"># else clause — runs if loop completes without break</span>
<span class="kw">for</span> n <span class="kw">in</span> <span class="bi">range</span>(<span class="num">2</span>, <span class="num">10</span>):
    <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">2</span>, n):
        <span class="kw">if</span> n % x == <span class="num">0</span>:
            <span class="kw">break</span>
    <span class="kw">else</span>:
        <span class="bi">print</span>(<span class="str">f"</span>{n}<span class="str"> is prime"</span>)

<span class="cm"># Nested loops</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1</span>, <span class="num">6</span>):
    <span class="kw">for</span> j <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1</span>, i + <span class="num">1</span>):
        <span class="bi">print</span>(<span class="str">"*"</span>, end=<span class="str">" "</span>)
    <span class="bi">print</span>()
<span class="cm"># *</span>
<span class="cm"># * *</span>
<span class="cm"># * * *</span>
<span class="cm"># * * * *</span>
<span class="cm"># * * * * *</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 3.2: Loop Practice</h4>
    </div>
    <ol>
        <li>Print the multiplication table (1-10) using nested loops</li>
        <li>Write a program to find all prime numbers up to 100</li>
        <li>Create a number guessing game using a while loop</li>
        <li>Calculate the factorial of a number using both for and while loops</li>
    </ol>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 4: DATA STRUCTURES
        // =============================================
        {
            id: 4,
            title: "Data Structures",
            level: "beginner",
            icon: "🗂️",
            description: "Master Python's built-in data structures: lists, tuples, dictionaries, and sets.",
            lessons: [
                {
                    id: "4-1",
                    title: "Lists — Creation, Indexing & Slicing",
                    duration: "25 min",
                    content: `
<h1>Lists in Python</h1>
<div class="lesson-meta">
    <span>📘 Module 4 — Data Structures</span>
    <span>⏱ 25 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>What is a List?</h2>
<p>A list is an <strong>ordered, mutable</strong> collection that can hold items of any type. Lists are one of the most versatile data structures in Python.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">lists.py</span></div>
    <pre class="code-body"><code><span class="cm"># Creating lists</span>
numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
names = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>, <span class="str">"Charlie"</span>]
mixed = [<span class="num">1</span>, <span class="str">"hello"</span>, <span class="num">3.14</span>, <span class="bool">True</span>, <span class="none">None</span>]
nested = [[<span class="num">1</span>, <span class="num">2</span>], [<span class="num">3</span>, <span class="num">4</span>], [<span class="num">5</span>, <span class="num">6</span>]]
empty = []

<span class="cm"># List from range</span>
nums = <span class="bi">list</span>(<span class="bi">range</span>(<span class="num">1</span>, <span class="num">11</span>))  <span class="cm"># [1, 2, 3, ..., 10]</span>

<span class="cm"># Indexing and slicing (same as strings)</span>
fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>, <span class="str">"date"</span>]
<span class="bi">print</span>(fruits[<span class="num">0</span>])      <span class="cm"># "apple"</span>
<span class="bi">print</span>(fruits[-<span class="num">1</span>])     <span class="cm"># "date"</span>
<span class="bi">print</span>(fruits[<span class="num">1</span>:<span class="num">3</span>])    <span class="cm"># ["banana", "cherry"]</span>

<span class="cm"># Modifying lists</span>
fruits[<span class="num">0</span>] = <span class="str">"avocado"</span>
<span class="bi">print</span>(fruits)  <span class="cm"># ["avocado", "banana", "cherry", "date"]</span></code></pre>
</div>

<h2>List Methods</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">list_methods.py</span></div>
    <pre class="code-body"><code>fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>]

<span class="cm"># Adding elements</span>
fruits.append(<span class="str">"cherry"</span>)          <span class="cm"># Add to end</span>
fruits.insert(<span class="num">1</span>, <span class="str">"blueberry"</span>)   <span class="cm"># Insert at index</span>
fruits.extend([<span class="str">"date"</span>, <span class="str">"elderberry"</span>])  <span class="cm"># Add multiple</span>

<span class="cm"># Removing elements</span>
fruits.remove(<span class="str">"banana"</span>)    <span class="cm"># Remove by value</span>
popped = fruits.pop()       <span class="cm"># Remove & return last</span>
popped = fruits.pop(<span class="num">0</span>)      <span class="cm"># Remove & return at index</span>
<span class="cm"># del fruits[0]             # Delete by index</span>
<span class="cm"># fruits.clear()            # Remove all</span>

<span class="cm"># Searching & Counting</span>
nums = [<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">9</span>, <span class="num">2</span>, <span class="num">6</span>]
<span class="bi">print</span>(nums.index(<span class="num">4</span>))     <span class="cm"># 2 (first occurrence)</span>
<span class="bi">print</span>(nums.count(<span class="num">1</span>))     <span class="cm"># 2</span>
<span class="bi">print</span>(<span class="num">5</span> <span class="kw">in</span> nums)         <span class="cm"># True</span>

<span class="cm"># Sorting</span>
nums.sort()                <span class="cm"># Sort in-place (ascending)</span>
nums.sort(reverse=<span class="bool">True</span>)   <span class="cm"># Sort descending</span>
sorted_nums = <span class="bi">sorted</span>(nums) <span class="cm"># Return new sorted list</span>
nums.reverse()             <span class="cm"># Reverse in-place</span>

<span class="cm"># Useful functions</span>
<span class="bi">print</span>(<span class="bi">len</span>(nums))     <span class="cm"># Length</span>
<span class="bi">print</span>(<span class="bi">sum</span>(nums))     <span class="cm"># Sum of numbers</span>
<span class="bi">print</span>(<span class="bi">min</span>(nums))     <span class="cm"># Minimum</span>
<span class="bi">print</span>(<span class="bi">max</span>(nums))     <span class="cm"># Maximum</span></code></pre>
</div>

<h2>List Comprehensions</h2>
<p>List comprehensions are a concise, Pythonic way to create lists:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">comprehensions.py</span></div>
    <pre class="code-body"><code><span class="cm"># Basic: [expression for item in iterable]</span>
squares = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">10</span>)]
<span class="bi">print</span>(squares)  <span class="cm"># [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</span>

<span class="cm"># With condition: [expression for item in iterable if condition]</span>
evens = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">20</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]
<span class="bi">print</span>(evens)  <span class="cm"># [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]</span>

<span class="cm"># With if-else</span>
labels = [<span class="str">"even"</span> <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span> <span class="kw">else</span> <span class="str">"odd"</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">5</span>)]
<span class="bi">print</span>(labels)  <span class="cm"># ['even', 'odd', 'even', 'odd', 'even']</span>

<span class="cm"># Nested comprehension (flatten)</span>
matrix = [[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>], [<span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>], [<span class="num">7</span>, <span class="num">8</span>, <span class="num">9</span>]]
flat = [num <span class="kw">for</span> row <span class="kw">in</span> matrix <span class="kw">for</span> num <span class="kw">in</span> row]
<span class="bi">print</span>(flat)  <span class="cm"># [1, 2, 3, 4, 5, 6, 7, 8, 9]</span>

<span class="cm"># Practical: clean a list of strings</span>
raw_data = [<span class="str">"  Alice  "</span>, <span class="str">"BOB"</span>, <span class="str">"  charlie"</span>]
clean = [name.strip().title() <span class="kw">for</span> name <span class="kw">in</span> raw_data]
<span class="bi">print</span>(clean)  <span class="cm"># ['Alice', 'Bob', 'Charlie']</span></code></pre>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 Pro Tip</div>
    <p>List comprehensions are generally faster than equivalent for-loop constructions. Use them when the logic is simple enough to be readable in one line.</p>
</div>
`
                },
                {
                    id: "4-2",
                    title: "Tuples, Dictionaries & Sets",
                    duration: "35 min",
                    content: `
<h1>Tuples, Dictionaries & Sets</h1>
<div class="lesson-meta">
    <span>📘 Module 4 — Data Structures</span>
    <span>⏱ 35 min read</span>
    <span>🎯 Beginner</span>
</div>

<h2>Tuples — Immutable Sequences</h2>
<p>Tuples are like lists, but <strong>immutable</strong> (cannot be changed after creation). They use parentheses <code>()</code>.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">tuples.py</span></div>
    <pre class="code-body"><code><span class="cm"># Creating tuples</span>
point = (<span class="num">3</span>, <span class="num">4</span>)
rgb = (<span class="num">255</span>, <span class="num">128</span>, <span class="num">0</span>)
single = (<span class="num">42</span>,)         <span class="cm"># Note the comma for single-element tuple!</span>
empty = ()

<span class="cm"># Tuple unpacking</span>
x, y = point
<span class="bi">print</span>(x, y)  <span class="cm"># 3 4</span>

r, g, b = rgb
<span class="bi">print</span>(<span class="str">f"R:</span>{r}<span class="str">, G:</span>{g}<span class="str">, B:</span>{b}<span class="str">"</span>)

<span class="cm"># Extended unpacking</span>
first, *rest = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
<span class="bi">print</span>(first)  <span class="cm"># 1</span>
<span class="bi">print</span>(rest)   <span class="cm"># [2, 3, 4, 5]</span>

<span class="cm"># Tuples are immutable</span>
<span class="cm"># point[0] = 10  # TypeError!</span>

<span class="cm"># Use tuples for: coordinates, RGB values, database records,</span>
<span class="cm"># function returns, dictionary keys (since they're hashable)</span></code></pre>
</div>

<h2>Dictionaries — Key-Value Pairs</h2>
<p>Dictionaries store data as <strong>key-value pairs</strong>. They are unordered (insertion-ordered since Python 3.7), mutable, and extremely fast for lookups.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">dictionaries.py</span></div>
    <pre class="code-body"><code><span class="cm"># Creating dictionaries</span>
student = {
    <span class="str">"name"</span>: <span class="str">"Alice"</span>,
    <span class="str">"age"</span>: <span class="num">20</span>,
    <span class="str">"major"</span>: <span class="str">"Computer Science"</span>,
    <span class="str">"gpa"</span>: <span class="num">3.8</span>
}

<span class="cm"># Accessing values</span>
<span class="bi">print</span>(student[<span class="str">"name"</span>])           <span class="cm"># "Alice"</span>
<span class="bi">print</span>(student.get(<span class="str">"age"</span>))        <span class="cm"># 20</span>
<span class="bi">print</span>(student.get(<span class="str">"phone"</span>, <span class="str">"N/A"</span>))  <span class="cm"># "N/A" (default)</span>

<span class="cm"># Modifying</span>
student[<span class="str">"age"</span>] = <span class="num">21</span>             <span class="cm"># Update value</span>
student[<span class="str">"email"</span>] = <span class="str">"alice@mail.com"</span>  <span class="cm"># Add new pair</span>
<span class="kw">del</span> student[<span class="str">"gpa"</span>]               <span class="cm"># Delete a pair</span>

<span class="cm"># Dictionary methods</span>
<span class="bi">print</span>(student.keys())    <span class="cm"># dict_keys([...])</span>
<span class="bi">print</span>(student.values())  <span class="cm"># dict_values([...])</span>
<span class="bi">print</span>(student.items())   <span class="cm"># dict_items([...])</span>

<span class="cm"># Iteration</span>
<span class="kw">for</span> key, value <span class="kw">in</span> student.items():
    <span class="bi">print</span>(<span class="str">f"</span>{key}<span class="str">: </span>{value}<span class="str">"</span>)

<span class="cm"># Dictionary comprehension</span>
squares = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">6</span>)}
<span class="bi">print</span>(squares)  <span class="cm"># {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</span>

<span class="cm"># Merging dictionaries (Python 3.9+)</span>
defaults = {<span class="str">"color"</span>: <span class="str">"blue"</span>, <span class="str">"size"</span>: <span class="str">"medium"</span>}
custom = {<span class="str">"color"</span>: <span class="str">"red"</span>}
merged = defaults | custom  <span class="cm"># {'color': 'red', 'size': 'medium'}</span></code></pre>
</div>

<h2>Sets — Unique Collections</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">sets.py</span></div>
    <pre class="code-body"><code><span class="cm"># Creating sets (unordered, no duplicates)</span>
colors = {<span class="str">"red"</span>, <span class="str">"green"</span>, <span class="str">"blue"</span>}
numbers = <span class="bi">set</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">3</span>, <span class="num">3</span>])  <span class="cm"># {1, 2, 3}</span>

<span class="cm"># Set operations</span>
a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>}
b = {<span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>}

<span class="bi">print</span>(a | b)   <span class="cm"># Union: {1, 2, 3, 4, 5, 6}</span>
<span class="bi">print</span>(a & b)   <span class="cm"># Intersection: {3, 4}</span>
<span class="bi">print</span>(a - b)   <span class="cm"># Difference: {1, 2}</span>
<span class="bi">print</span>(a ^ b)   <span class="cm"># Symmetric difference: {1, 2, 5, 6}</span>

<span class="cm"># Practical: remove duplicates from a list</span>
data = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">3</span>, <span class="num">4</span>]
unique = <span class="bi">list</span>(<span class="bi">set</span>(data))
<span class="bi">print</span>(unique)  <span class="cm"># [1, 2, 3, 4]</span></code></pre>
</div>

<div class="info-box note">
    <div class="info-box-title">📝 Choosing the Right Data Structure</div>
    <p><strong>List:</strong> Ordered, allows duplicates, use for sequences. <strong>Tuple:</strong> Immutable sequence, use for fixed data. <strong>Dict:</strong> Key-value mapping, use for lookups. <strong>Set:</strong> Unique values, use for membership testing and set operations.</p>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 4.2: Data Structures Practice</h4>
    </div>
    <ol>
        <li>Create a phone book using a dictionary with add, search, and delete operations</li>
        <li>Write a program that counts word frequency in a paragraph using a dictionary</li>
        <li>Find common elements between two lists using sets</li>
        <li>Implement a simple to-do list using a list of dictionaries</li>
    </ol>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 5: FUNCTIONS
        // =============================================
        {
            id: 5,
            title: "Functions",
            level: "intermediate",
            icon: "⚡",
            description: "Define and call functions, work with parameters, return values, scope, lambda functions, and decorators.",
            lessons: [
                {
                    id: "5-1",
                    title: "Defining & Calling Functions",
                    duration: "25 min",
                    content: `
<h1>Defining & Calling Functions</h1>
<div class="lesson-meta">
    <span>📘 Module 5 — Functions</span>
    <span>⏱ 25 min read</span>
    <span>🎯 Intermediate</span>
</div>

<h2>Why Functions?</h2>
<p>Functions are reusable blocks of code that perform a specific task. They help you write <strong>DRY</strong> (Don't Repeat Yourself) code, improve readability, and make testing easier.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">functions.py</span></div>
    <pre class="code-body"><code><span class="cm"># Defining a function</span>
<span class="kw">def</span> <span class="fn">greet</span>(name):
    <span class="str">"""Greet a person by name."""</span>
    <span class="kw">return</span> <span class="str">f"Hello, </span>{name}<span class="str">! Welcome! 👋"</span>

<span class="cm"># Calling a function</span>
message = greet(<span class="str">"Alice"</span>)
<span class="bi">print</span>(message)  <span class="cm"># Hello, Alice! Welcome! 👋</span>

<span class="cm"># Function with multiple parameters</span>
<span class="kw">def</span> <span class="fn">calculate_area</span>(length, width):
    <span class="str">"""Calculate the area of a rectangle."""</span>
    area = length * width
    <span class="kw">return</span> area

<span class="bi">print</span>(calculate_area(<span class="num">5</span>, <span class="num">3</span>))   <span class="cm"># 15</span>
<span class="bi">print</span>(calculate_area(<span class="num">10</span>, <span class="num">7</span>))  <span class="cm"># 70</span></code></pre>
</div>

<h2>Parameters & Arguments</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">parameters.py</span></div>
    <pre class="code-body"><code><span class="cm"># Default parameters</span>
<span class="kw">def</span> <span class="fn">power</span>(base, exponent=<span class="num">2</span>):
    <span class="kw">return</span> base ** exponent

<span class="bi">print</span>(power(<span class="num">5</span>))      <span class="cm"># 25 (uses default exponent=2)</span>
<span class="bi">print</span>(power(<span class="num">5</span>, <span class="num">3</span>))   <span class="cm"># 125</span>

<span class="cm"># Keyword arguments</span>
<span class="kw">def</span> <span class="fn">create_user</span>(name, age, role=<span class="str">"student"</span>):
    <span class="kw">return</span> {<span class="str">"name"</span>: name, <span class="str">"age"</span>: age, <span class="str">"role"</span>: role}

user = create_user(age=<span class="num">20</span>, name=<span class="str">"Alice"</span>)  <span class="cm"># Order doesn't matter</span>

<span class="cm"># *args — variable positional arguments</span>
<span class="kw">def</span> <span class="fn">add_all</span>(*numbers):
    <span class="kw">return</span> <span class="bi">sum</span>(numbers)

<span class="bi">print</span>(add_all(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>))        <span class="cm"># 6</span>
<span class="bi">print</span>(add_all(<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>))  <span class="cm"># 100</span>

<span class="cm"># **kwargs — variable keyword arguments</span>
<span class="kw">def</span> <span class="fn">build_profile</span>(**kwargs):
    <span class="kw">return</span> kwargs

profile = build_profile(name=<span class="str">"Alice"</span>, age=<span class="num">25</span>, city=<span class="str">"NYC"</span>)
<span class="bi">print</span>(profile)  <span class="cm"># {'name': 'Alice', 'age': 25, 'city': 'NYC'}</span>

<span class="cm"># Combining all parameter types</span>
<span class="kw">def</span> <span class="fn">full_example</span>(a, b, *args, key=<span class="str">"default"</span>, **kwargs):
    <span class="bi">print</span>(<span class="str">f"a=</span>{a}<span class="str">, b=</span>{b}<span class="str">"</span>)
    <span class="bi">print</span>(<span class="str">f"args=</span>{args}<span class="str">"</span>)
    <span class="bi">print</span>(<span class="str">f"key=</span>{key}<span class="str">"</span>)
    <span class="bi">print</span>(<span class="str">f"kwargs=</span>{kwargs}<span class="str">"</span>)</code></pre>
</div>

<h2>Return Values</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">returns.py</span></div>
    <pre class="code-body"><code><span class="cm"># Return multiple values (as a tuple)</span>
<span class="kw">def</span> <span class="fn">min_max</span>(numbers):
    <span class="kw">return</span> <span class="bi">min</span>(numbers), <span class="bi">max</span>(numbers)

low, high = min_max([<span class="num">3</span>, <span class="num">1</span>, <span class="num">7</span>, <span class="num">2</span>, <span class="num">9</span>])
<span class="bi">print</span>(<span class="str">f"Min: </span>{low}<span class="str">, Max: </span>{high}<span class="str">"</span>)  <span class="cm"># Min: 1, Max: 9</span>

<span class="cm"># Early return for validation</span>
<span class="kw">def</span> <span class="fn">divide</span>(a, b):
    <span class="kw">if</span> b == <span class="num">0</span>:
        <span class="kw">return</span> <span class="none">None</span>  <span class="cm"># Early return</span>
    <span class="kw">return</span> a / b

result = divide(<span class="num">10</span>, <span class="num">3</span>)
<span class="bi">print</span>(result)  <span class="cm"># 3.3333...</span></code></pre>
</div>

<h2>Lambda Functions</h2>
<p>Lambda functions are small, anonymous functions defined in a single line:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">lambda.py</span></div>
    <pre class="code-body"><code><span class="cm"># Syntax: lambda parameters: expression</span>
square = <span class="kw">lambda</span> x: x ** <span class="num">2</span>
<span class="bi">print</span>(square(<span class="num">5</span>))  <span class="cm"># 25</span>

add = <span class="kw">lambda</span> a, b: a + b
<span class="bi">print</span>(add(<span class="num">3</span>, <span class="num">4</span>))  <span class="cm"># 7</span>

<span class="cm"># Commonly used with map, filter, sorted</span>
numbers = [<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">9</span>]
sorted_nums = <span class="bi">sorted</span>(numbers, key=<span class="kw">lambda</span> x: -x)
<span class="bi">print</span>(sorted_nums)  <span class="cm"># [9, 5, 4, 3, 1, 1]</span>

<span class="cm"># Sort list of dicts</span>
students = [
    {<span class="str">"name"</span>: <span class="str">"Alice"</span>, <span class="str">"grade"</span>: <span class="num">85</span>},
    {<span class="str">"name"</span>: <span class="str">"Bob"</span>, <span class="str">"grade"</span>: <span class="num">92</span>},
    {<span class="str">"name"</span>: <span class="str">"Charlie"</span>, <span class="str">"grade"</span>: <span class="num">78</span>}
]
top_students = <span class="bi">sorted</span>(students, key=<span class="kw">lambda</span> s: s[<span class="str">"grade"</span>], reverse=<span class="bool">True</span>)

<span class="cm"># map and filter</span>
doubled = <span class="bi">list</span>(<span class="bi">map</span>(<span class="kw">lambda</span> x: x * <span class="num">2</span>, numbers))
evens = <span class="bi">list</span>(<span class="bi">filter</span>(<span class="kw">lambda</span> x: x % <span class="num">2</span> == <span class="num">0</span>, numbers))</code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 5.1: Function Mastery</h4>
    </div>
    <ol>
        <li>Write a function that checks if a number is prime</li>
        <li>Create a temperature converter (Celsius ↔ Fahrenheit ↔ Kelvin)</li>
        <li>Write a function that returns the Fibonacci sequence up to n terms</li>
        <li>Implement a function using *args that calculates the average of any number of values</li>
    </ol>
</div>
`
                },
                {
                    id: "5-2",
                    title: "Scope, Closures & Decorators",
                    duration: "30 min",
                    content: `
<h1>Scope, Closures & Decorators</h1>
<div class="lesson-meta">
    <span>📘 Module 5 — Functions</span>
    <span>⏱ 30 min read</span>
    <span>🎯 Intermediate</span>
</div>

<h2>Variable Scope (LEGB Rule)</h2>
<p>Python follows the <strong>LEGB</strong> rule for variable lookup: Local → Enclosing → Global → Built-in.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">scope.py</span></div>
    <pre class="code-body"><code>x = <span class="str">"global"</span>  <span class="cm"># Global scope</span>

<span class="kw">def</span> <span class="fn">outer</span>():
    x = <span class="str">"enclosing"</span>  <span class="cm"># Enclosing scope</span>
    
    <span class="kw">def</span> <span class="fn">inner</span>():
        x = <span class="str">"local"</span>  <span class="cm"># Local scope</span>
        <span class="bi">print</span>(x)  <span class="cm"># "local"</span>
    
    inner()
    <span class="bi">print</span>(x)  <span class="cm"># "enclosing"</span>

outer()
<span class="bi">print</span>(x)  <span class="cm"># "global"</span>

<span class="cm"># Using global and nonlocal keywords</span>
count = <span class="num">0</span>

<span class="kw">def</span> <span class="fn">increment</span>():
    <span class="kw">global</span> count
    count += <span class="num">1</span>

increment()
<span class="bi">print</span>(count)  <span class="cm"># 1</span></code></pre>
</div>

<h2>Closures</h2>
<p>A closure is a function that remembers the environment in which it was created:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">closures.py</span></div>
    <pre class="code-body"><code><span class="kw">def</span> <span class="fn">make_multiplier</span>(factor):
    <span class="str">"""Returns a function that multiplies by factor."""</span>
    <span class="kw">def</span> <span class="fn">multiplier</span>(x):
        <span class="kw">return</span> x * factor
    <span class="kw">return</span> multiplier

double = make_multiplier(<span class="num">2</span>)
triple = make_multiplier(<span class="num">3</span>)

<span class="bi">print</span>(double(<span class="num">5</span>))   <span class="cm"># 10</span>
<span class="bi">print</span>(triple(<span class="num">5</span>))   <span class="cm"># 15</span>

<span class="cm"># Closure with state</span>
<span class="kw">def</span> <span class="fn">make_counter</span>():
    count = <span class="num">0</span>
    <span class="kw">def</span> <span class="fn">counter</span>():
        <span class="kw">nonlocal</span> count
        count += <span class="num">1</span>
        <span class="kw">return</span> count
    <span class="kw">return</span> counter

c = make_counter()
<span class="bi">print</span>(c())  <span class="cm"># 1</span>
<span class="bi">print</span>(c())  <span class="cm"># 2</span>
<span class="bi">print</span>(c())  <span class="cm"># 3</span></code></pre>
</div>

<h2>Decorators</h2>
<p>Decorators are functions that modify the behavior of other functions. They're one of Python's most powerful features:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">decorators.py</span></div>
    <pre class="code-body"><code><span class="kw">import</span> time
<span class="kw">from</span> functools <span class="kw">import</span> wraps

<span class="cm"># A simple decorator</span>
<span class="kw">def</span> <span class="fn">timer</span>(func):
    <span class="str">"""Measure execution time of a function."""</span>
    <span class="dec">@wraps</span>(func)
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        <span class="bi">print</span>(<span class="str">f"</span>{func.__name__}<span class="str"> took </span>{end - start:<span class="num">.4f</span>}<span class="str">s"</span>)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper

<span class="dec">@timer</span>
<span class="kw">def</span> <span class="fn">slow_function</span>():
    time.sleep(<span class="num">1</span>)
    <span class="kw">return</span> <span class="str">"Done!"</span>

slow_function()  <span class="cm"># slow_function took 1.0012s</span>

<span class="cm"># Decorator with arguments</span>
<span class="kw">def</span> <span class="fn">repeat</span>(times):
    <span class="kw">def</span> <span class="fn">decorator</span>(func):
        <span class="dec">@wraps</span>(func)
        <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
            <span class="kw">for</span> _ <span class="kw">in</span> <span class="bi">range</span>(times):
                result = func(*args, **kwargs)
            <span class="kw">return</span> result
        <span class="kw">return</span> wrapper
    <span class="kw">return</span> decorator

<span class="dec">@repeat</span>(times=<span class="num">3</span>)
<span class="kw">def</span> <span class="fn">say_hello</span>():
    <span class="bi">print</span>(<span class="str">"Hello!"</span>)

say_hello()
<span class="cm"># Hello!</span>
<span class="cm"># Hello!</span>
<span class="cm"># Hello!</span></code></pre>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 Common Built-in Decorators</div>
    <p><code>@property</code>, <code>@staticmethod</code>, <code>@classmethod</code>, <code>@functools.lru_cache</code>, and <code>@functools.wraps</code> are decorators you'll use frequently in professional Python code.</p>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 6: OOP
        // =============================================
        {
            id: 6,
            title: "Object-Oriented Programming",
            level: "intermediate",
            icon: "🏗️",
            description: "Master classes, objects, inheritance, polymorphism, encapsulation, and Python's special methods.",
            lessons: [
                {
                    id: "6-1",
                    title: "Classes & Objects",
                    duration: "30 min",
                    content: `
<h1>Classes & Objects</h1>
<div class="lesson-meta">
    <span>📘 Module 6 — OOP</span>
    <span>⏱ 30 min read</span>
    <span>🎯 Intermediate</span>
</div>

<h2>Introduction to OOP</h2>
<p>Object-Oriented Programming (OOP) is a paradigm that organizes code around <strong>objects</strong> — instances of <strong>classes</strong>. A class is a blueprint; an object is a concrete instance of that blueprint.</p>

<p>The four pillars of OOP are: <strong>Encapsulation</strong>, <strong>Abstraction</strong>, <strong>Inheritance</strong>, and <strong>Polymorphism</strong>.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">classes.py</span></div>
    <pre class="code-body"><code><span class="kw">class</span> <span class="cls">Dog</span>:
    <span class="str">"""A class representing a dog."""</span>
    
    <span class="cm"># Class attribute (shared by all instances)</span>
    species = <span class="str">"Canis familiaris"</span>
    
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="self">self</span>, name, age, breed):
        <span class="str">"""Initialize a new Dog instance."""</span>
        <span class="cm"># Instance attributes (unique to each instance)</span>
        <span class="self">self</span>.name = name
        <span class="self">self</span>.age = age
        <span class="self">self</span>.breed = breed
        <span class="self">self</span>.tricks = []
    
    <span class="kw">def</span> <span class="fn">bark</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="str">f"</span>{<span class="self">self</span>.name}<span class="str"> says Woof! 🐾"</span>
    
    <span class="kw">def</span> <span class="fn">learn_trick</span>(<span class="self">self</span>, trick):
        <span class="self">self</span>.tricks.append(trick)
        <span class="kw">return</span> <span class="str">f"</span>{<span class="self">self</span>.name}<span class="str"> learned </span>{trick}<span class="str">!"</span>
    
    <span class="kw">def</span> <span class="fn">__str__</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="str">f"</span>{<span class="self">self</span>.name}<span class="str"> (</span>{<span class="self">self</span>.breed}<span class="str">, </span>{<span class="self">self</span>.age}<span class="str"> years)"</span>
    
    <span class="kw">def</span> <span class="fn">__repr__</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="str">f"Dog('</span>{<span class="self">self</span>.name}<span class="str">', </span>{<span class="self">self</span>.age}<span class="str">, '</span>{<span class="self">self</span>.breed}<span class="str">')"</span>

<span class="cm"># Creating objects (instances)</span>
buddy = Dog(<span class="str">"Buddy"</span>, <span class="num">3</span>, <span class="str">"Golden Retriever"</span>)
max_dog = Dog(<span class="str">"Max"</span>, <span class="num">5</span>, <span class="str">"German Shepherd"</span>)

<span class="bi">print</span>(buddy.bark())            <span class="cm"># Buddy says Woof! 🐾</span>
<span class="bi">print</span>(buddy.learn_trick(<span class="str">"sit"</span>)) <span class="cm"># Buddy learned sit!</span>
<span class="bi">print</span>(buddy)                    <span class="cm"># Buddy (Golden Retriever, 3 years)</span>
<span class="bi">print</span>(buddy.species)            <span class="cm"># Canis familiaris</span></code></pre>
</div>

<h2>Inheritance</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">inheritance.py</span></div>
    <pre class="code-body"><code><span class="kw">class</span> <span class="cls">Animal</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="self">self</span>, name, sound):
        <span class="self">self</span>.name = name
        <span class="self">self</span>.sound = sound
    
    <span class="kw">def</span> <span class="fn">speak</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="str">f"</span>{<span class="self">self</span>.name}<span class="str"> says </span>{<span class="self">self</span>.sound}<span class="str">"</span>

<span class="kw">class</span> <span class="cls">Cat</span>(Animal):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="self">self</span>, name, indoor=<span class="bool">True</span>):
        <span class="bi">super</span>().__init__(name, <span class="str">"Meow"</span>)
        <span class="self">self</span>.indoor = indoor
    
    <span class="kw">def</span> <span class="fn">purr</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="str">f"</span>{<span class="self">self</span>.name}<span class="str"> purrs... 😻"</span>

<span class="kw">class</span> <span class="cls">ServiceDog</span>(Dog):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="self">self</span>, name, age, breed, task):
        <span class="bi">super</span>().__init__(name, age, breed)
        <span class="self">self</span>.task = task
    
    <span class="kw">def</span> <span class="fn">work</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="str">f"</span>{<span class="self">self</span>.name}<span class="str"> is performing: </span>{<span class="self">self</span>.task}<span class="str">"</span>

<span class="cm"># Usage</span>
kitty = Cat(<span class="str">"Whiskers"</span>)
<span class="bi">print</span>(kitty.speak())  <span class="cm"># Whiskers says Meow</span>
<span class="bi">print</span>(kitty.purr())   <span class="cm"># Whiskers purrs... 😻</span>

rex = ServiceDog(<span class="str">"Rex"</span>, <span class="num">4</span>, <span class="str">"Labrador"</span>, <span class="str">"Guide dog"</span>)
<span class="bi">print</span>(rex.bark())  <span class="cm"># Rex says Woof! 🐾</span>
<span class="bi">print</span>(rex.work())  <span class="cm"># Rex is performing: Guide dog</span>

<span class="cm"># Check inheritance</span>
<span class="bi">print</span>(<span class="bi">isinstance</span>(kitty, Animal))  <span class="cm"># True</span>
<span class="bi">print</span>(<span class="bi">isinstance</span>(kitty, Cat))     <span class="cm"># True</span>
<span class="bi">print</span>(<span class="bi">issubclass</span>(Cat, Animal))    <span class="cm"># True</span></code></pre>
</div>

<h2>Properties and Encapsulation</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">properties.py</span></div>
    <pre class="code-body"><code><span class="kw">class</span> <span class="cls">BankAccount</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="self">self</span>, owner, balance=<span class="num">0</span>):
        <span class="self">self</span>.owner = owner
        <span class="self">self</span>._balance = balance  <span class="cm"># Convention: _ means "private"</span>
    
    <span class="dec">@property</span>
    <span class="kw">def</span> <span class="fn">balance</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="self">self</span>._balance
    
    <span class="kw">def</span> <span class="fn">deposit</span>(<span class="self">self</span>, amount):
        <span class="kw">if</span> amount > <span class="num">0</span>:
            <span class="self">self</span>._balance += amount
            <span class="kw">return</span> <span class="str">f"Deposited \${amount:.2f}"</span>
        <span class="kw">raise</span> <span class="cls">ValueError</span>(<span class="str">"Amount must be positive"</span>)
    
    <span class="kw">def</span> <span class="fn">withdraw</span>(<span class="self">self</span>, amount):
        <span class="kw">if</span> <span class="num">0</span> < amount <= <span class="self">self</span>._balance:
            <span class="self">self</span>._balance -= amount
            <span class="kw">return</span> <span class="str">f"Withdrew \${amount:.2f}"</span>
        <span class="kw">raise</span> <span class="cls">ValueError</span>(<span class="str">"Insufficient funds"</span>)
    
    <span class="kw">def</span> <span class="fn">__str__</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="str">f"Account(</span>{<span class="self">self</span>.owner}<span class="str">): \${</span><span class="self">self</span>._balance:<span class="num">.2f</span>}<span class="str">"</span>

account = BankAccount(<span class="str">"Alice"</span>, <span class="num">1000</span>)
<span class="bi">print</span>(account.deposit(<span class="num">500</span>))   <span class="cm"># Deposited $500.00</span>
<span class="bi">print</span>(account.balance)        <span class="cm"># 1500</span>
<span class="bi">print</span>(account)                <span class="cm"># Account(Alice): $1500.00</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 6.1: OOP Practice</h4>
    </div>
    <ol>
        <li>Create a <code>Shape</code> hierarchy: base class <code>Shape</code> with subclasses <code>Circle</code>, <code>Rectangle</code>, <code>Triangle</code>, each with an <code>area()</code> method</li>
        <li>Build a <code>Library</code> system with <code>Book</code>, <code>Member</code>, and <code>Library</code> classes</li>
        <li>Implement a <code>Student</code> class with GPA calculation and grade tracking</li>
    </ol>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 7: FILE HANDLING & EXCEPTIONS
        // =============================================
        {
            id: 7,
            title: "File Handling & Exceptions",
            level: "intermediate",
            icon: "📁",
            description: "Learn to read/write files, handle exceptions gracefully, and work with JSON and CSV data.",
            lessons: [
                {
                    id: "7-1",
                    title: "File I/O & Exception Handling",
                    duration: "35 min",
                    content: `
<h1>File I/O & Exception Handling</h1>
<div class="lesson-meta">
    <span>📘 Module 7 — File Handling & Exceptions</span>
    <span>⏱ 35 min read</span>
    <span>🎯 Intermediate</span>
</div>

<h2>Reading & Writing Files</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">file_io.py</span></div>
    <pre class="code-body"><code><span class="cm"># Writing to a file</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"output.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    f.write(<span class="str">"Hello, File!\\n"</span>)
    f.write(<span class="str">"Python is great!\\n"</span>)

<span class="cm"># Reading entire file</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"output.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    content = f.read()
    <span class="bi">print</span>(content)

<span class="cm"># Reading line by line</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"output.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    <span class="kw">for</span> line <span class="kw">in</span> f:
        <span class="bi">print</span>(line.strip())

<span class="cm"># Appending to a file</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"output.txt"</span>, <span class="str">"a"</span>) <span class="kw">as</span> f:
    f.write(<span class="str">"New line appended!\\n"</span>)

<span class="cm"># Reading lines into a list</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"output.txt"</span>) <span class="kw">as</span> f:
    lines = f.readlines()  <span class="cm"># List of lines</span></code></pre>
</div>

<div class="info-box note">
    <div class="info-box-title">📝 The with Statement</div>
    <p>Always use <code>with open()</code> as a context manager. It automatically closes the file when done, even if an error occurs. This prevents resource leaks.</p>
</div>

<h2>Working with JSON</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">json_example.py</span></div>
    <pre class="code-body"><code><span class="kw">import</span> json

<span class="cm"># Python dict to JSON string</span>
data = {
    <span class="str">"name"</span>: <span class="str">"Alice"</span>,
    <span class="str">"age"</span>: <span class="num">25</span>,
    <span class="str">"courses"</span>: [<span class="str">"Python"</span>, <span class="str">"Data Science"</span>],
    <span class="str">"graduated"</span>: <span class="bool">False</span>
}

<span class="cm"># Write JSON to file</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"student.json"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    json.dump(data, f, indent=<span class="num">4</span>)

<span class="cm"># Read JSON from file</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"student.json"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    loaded = json.load(f)

<span class="bi">print</span>(loaded[<span class="str">"name"</span>])  <span class="cm"># Alice</span>

<span class="cm"># Convert to/from JSON strings</span>
json_str = json.dumps(data, indent=<span class="num">2</span>)
parsed = json.loads(json_str)</code></pre>
</div>

<h2>Exception Handling</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">exceptions.py</span></div>
    <pre class="code-body"><code><span class="cm"># try-except-else-finally</span>
<span class="kw">try</span>:
    number = <span class="bi">int</span>(<span class="bi">input</span>(<span class="str">"Enter a number: "</span>))
    result = <span class="num">100</span> / number
<span class="kw">except</span> <span class="cls">ValueError</span>:
    <span class="bi">print</span>(<span class="str">"That's not a valid number!"</span>)
<span class="kw">except</span> <span class="cls">ZeroDivisionError</span>:
    <span class="bi">print</span>(<span class="str">"Cannot divide by zero!"</span>)
<span class="kw">except</span> <span class="cls">Exception</span> <span class="kw">as</span> e:
    <span class="bi">print</span>(<span class="str">f"Unexpected error: </span>{e}<span class="str">"</span>)
<span class="kw">else</span>:
    <span class="bi">print</span>(<span class="str">f"Result: </span>{result}<span class="str">"</span>)  <span class="cm"># Runs if no exception</span>
<span class="kw">finally</span>:
    <span class="bi">print</span>(<span class="str">"This always runs"</span>)

<span class="cm"># Raising exceptions</span>
<span class="kw">def</span> <span class="fn">set_age</span>(age):
    <span class="kw">if</span> <span class="kw">not</span> <span class="bi">isinstance</span>(age, <span class="bi">int</span>):
        <span class="kw">raise</span> <span class="cls">TypeError</span>(<span class="str">"Age must be an integer"</span>)
    <span class="kw">if</span> age < <span class="num">0</span> <span class="kw">or</span> age > <span class="num">150</span>:
        <span class="kw">raise</span> <span class="cls">ValueError</span>(<span class="str">"Age must be between 0 and 150"</span>)
    <span class="kw">return</span> age

<span class="cm"># Custom exceptions</span>
<span class="kw">class</span> <span class="cls">InsufficientFundsError</span>(<span class="cls">Exception</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="self">self</span>, balance, amount):
        <span class="self">self</span>.balance = balance
        <span class="self">self</span>.amount = amount
        <span class="bi">super</span>().__init__(
            <span class="str">f"Cannot withdraw \${amount}. Balance: \${balance}"</span>
        )</code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 7.1: File & Error Handling</h4>
    </div>
    <ol>
        <li>Write a program that reads a CSV file, processes data, and writes results to JSON</li>
        <li>Create a simple contact book that saves/loads from a JSON file</li>
        <li>Implement a file copy program with proper error handling</li>
        <li>Build a log parser that reads log files and extracts error messages</li>
    </ol>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 8: MODULES & PACKAGES
        // =============================================
        {
            id: 8,
            title: "Modules & Packages",
            level: "intermediate",
            icon: "📦",
            description: "Organize code into modules and packages, use pip, and understand virtual environments.",
            lessons: [
                {
                    id: "8-1",
                    title: "Modules, Packages & pip",
                    duration: "25 min",
                    content: `
<h1>Modules, Packages & pip</h1>
<div class="lesson-meta">
    <span>📘 Module 8 — Modules & Packages</span>
    <span>⏱ 25 min read</span>
    <span>🎯 Intermediate</span>
</div>

<h2>Importing Modules</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">imports.py</span></div>
    <pre class="code-body"><code><span class="cm"># Different import styles</span>
<span class="kw">import</span> math
<span class="kw">import</span> os
<span class="kw">import</span> datetime <span class="kw">as</span> dt

<span class="kw">from</span> math <span class="kw">import</span> pi, sqrt, factorial
<span class="kw">from</span> collections <span class="kw">import</span> Counter, defaultdict
<span class="kw">from</span> pathlib <span class="kw">import</span> Path

<span class="cm"># Standard library highlights</span>
<span class="bi">print</span>(math.sqrt(<span class="num">144</span>))          <span class="cm"># 12.0</span>
<span class="bi">print</span>(dt.datetime.now())        <span class="cm"># Current datetime</span>
<span class="bi">print</span>(os.getcwd())              <span class="cm"># Current directory</span>

<span class="cm"># collections module</span>
words = <span class="str">"the cat sat on the mat the cat"</span>.split()
counter = Counter(words)
<span class="bi">print</span>(counter.most_common(<span class="num">2</span>))  <span class="cm"># [('the', 3), ('cat', 2)]</span>

<span class="cm"># pathlib — modern file paths</span>
p = Path(<span class="str">"my_folder"</span>) / <span class="str">"subfolder"</span> / <span class="str">"file.txt"</span>
<span class="bi">print</span>(p)  <span class="cm"># my_folder/subfolder/file.txt</span></code></pre>
</div>

<h2>Creating Your Own Modules</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">my_utils.py</span></div>
    <pre class="code-body"><code><span class="str">"""My utility functions module."""</span>

<span class="kw">def</span> <span class="fn">celsius_to_fahrenheit</span>(celsius):
    <span class="kw">return</span> celsius * <span class="num">9</span>/<span class="num">5</span> + <span class="num">32</span>

<span class="kw">def</span> <span class="fn">is_prime</span>(n):
    <span class="kw">if</span> n < <span class="num">2</span>:
        <span class="kw">return</span> <span class="bool">False</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="bi">range</span>(<span class="num">2</span>, <span class="bi">int</span>(n**<span class="num">0.5</span>) + <span class="num">1</span>):
        <span class="kw">if</span> n % i == <span class="num">0</span>:
            <span class="kw">return</span> <span class="bool">False</span>
    <span class="kw">return</span> <span class="bool">True</span>

PI = <span class="num">3.14159265</span>

<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    <span class="cm"># This only runs if the file is executed directly</span>
    <span class="bi">print</span>(<span class="str">"Testing module..."</span>)
    <span class="bi">print</span>(celsius_to_fahrenheit(<span class="num">100</span>))  <span class="cm"># 212.0</span>
    <span class="bi">print</span>(is_prime(<span class="num">17</span>))                 <span class="cm"># True</span></code></pre>
</div>

<h2>Virtual Environments & pip</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">terminal</span></div>
    <pre class="code-body"><code><span class="cm"># Create a virtual environment</span>
python -m venv myenv

<span class="cm"># Activate it</span>
<span class="cm"># Windows:</span>
myenv\\Scripts\\activate
<span class="cm"># macOS/Linux:</span>
source myenv/bin/activate

<span class="cm"># Install packages</span>
pip install requests flask pandas numpy

<span class="cm"># Save dependencies</span>
pip freeze > requirements.txt

<span class="cm"># Install from requirements</span>
pip install -r requirements.txt

<span class="cm"># Deactivate</span>
deactivate</code></pre>
</div>

<div class="info-box important">
    <div class="info-box-title">⚠️ Always Use Virtual Environments</div>
    <p>Virtual environments isolate project dependencies. This prevents conflicts between projects and ensures reproducibility. Every professional Python project uses them.</p>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 9: ADVANCED TOPICS
        // =============================================
        {
            id: 9,
            title: "Advanced Python Concepts",
            level: "advanced",
            icon: "🔬",
            description: "Explore generators, iterators, context managers, metaclasses, and advanced patterns.",
            lessons: [
                {
                    id: "9-1",
                    title: "Generators & Iterators",
                    duration: "30 min",
                    content: `
<h1>Generators & Iterators</h1>
<div class="lesson-meta">
    <span>📘 Module 9 — Advanced Concepts</span>
    <span>⏱ 30 min read</span>
    <span>🎯 Advanced</span>
</div>

<h2>Iterators</h2>
<p>An iterator is any object that implements the <code>__iter__()</code> and <code>__next__()</code> methods. All Python collections are iterable.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">iterators.py</span></div>
    <pre class="code-body"><code><span class="cm"># Custom iterator</span>
<span class="kw">class</span> <span class="cls">Countdown</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="self">self</span>, start):
        <span class="self">self</span>.current = start
    
    <span class="kw">def</span> <span class="fn">__iter__</span>(<span class="self">self</span>):
        <span class="kw">return</span> <span class="self">self</span>
    
    <span class="kw">def</span> <span class="fn">__next__</span>(<span class="self">self</span>):
        <span class="kw">if</span> <span class="self">self</span>.current <= <span class="num">0</span>:
            <span class="kw">raise</span> <span class="cls">StopIteration</span>
        <span class="self">self</span>.current -= <span class="num">1</span>
        <span class="kw">return</span> <span class="self">self</span>.current + <span class="num">1</span>

<span class="kw">for</span> num <span class="kw">in</span> Countdown(<span class="num">5</span>):
    <span class="bi">print</span>(num)  <span class="cm"># 5, 4, 3, 2, 1</span></code></pre>
</div>

<h2>Generators</h2>
<p>Generators are a simpler way to create iterators. They use <code>yield</code> instead of <code>return</code> and produce values lazily (on demand), making them memory-efficient:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">generators.py</span></div>
    <pre class="code-body"><code><span class="cm"># Generator function</span>
<span class="kw">def</span> <span class="fn">fibonacci</span>(limit):
    <span class="str">"""Generate Fibonacci numbers up to limit."""</span>
    a, b = <span class="num">0</span>, <span class="num">1</span>
    <span class="kw">while</span> a < limit:
        <span class="kw">yield</span> a
        a, b = b, a + b

<span class="cm"># Using the generator</span>
<span class="kw">for</span> num <span class="kw">in</span> fibonacci(<span class="num">100</span>):
    <span class="bi">print</span>(num, end=<span class="str">" "</span>)
<span class="cm"># 0 1 1 2 3 5 8 13 21 34 55 89</span>

<span class="cm"># Generator expression (like list comprehension)</span>
squares = (x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1000000</span>))
<span class="cm"># Memory efficient! Only computes values as needed</span>

<span class="cm"># Practical: reading huge files</span>
<span class="kw">def</span> <span class="fn">read_large_file</span>(file_path):
    <span class="str">"""Read a file line by line without loading it all."""</span>
    <span class="kw">with</span> <span class="bi">open</span>(file_path) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">yield</span> line.strip()

<span class="cm"># Pipeline of generators</span>
<span class="kw">def</span> <span class="fn">integers</span>():
    n = <span class="num">1</span>
    <span class="kw">while</span> <span class="bool">True</span>:
        <span class="kw">yield</span> n
        n += <span class="num">1</span>

<span class="kw">def</span> <span class="fn">take</span>(n, iterable):
    <span class="kw">for</span> i, item <span class="kw">in</span> <span class="bi">enumerate</span>(iterable):
        <span class="kw">if</span> i >= n:
            <span class="kw">return</span>
        <span class="kw">yield</span> item

<span class="cm"># Get first 10 squares of integers</span>
first_10 = <span class="bi">list</span>(take(<span class="num">10</span>, (x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> integers())))
<span class="bi">print</span>(first_10)  <span class="cm"># [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]</span></code></pre>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 When to Use Generators</div>
    <p>Use generators when working with large datasets, infinite sequences, or pipelines of data transformations. They save memory by computing values lazily.</p>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 10: STANDARD LIBRARY
        // =============================================
        {
            id: 10,
            title: "The Standard Library",
            level: "intermediate",
            icon: "📚",
            description: "Explore Python's powerful standard library: os, sys, datetime, re, collections, itertools, and more.",
            lessons: [
                {
                    id: "10-1",
                    title: "Essential Standard Library Modules",
                    duration: "35 min",
                    content: `
<h1>Essential Standard Library Modules</h1>
<div class="lesson-meta">
    <span>📘 Module 10 — Standard Library</span>
    <span>⏱ 35 min read</span>
    <span>🎯 Intermediate</span>
</div>

<h2>datetime — Date and Time</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">datetime_demo.py</span></div>
    <pre class="code-body"><code><span class="kw">from</span> datetime <span class="kw">import</span> datetime, date, timedelta

<span class="cm"># Current date/time</span>
now = datetime.now()
<span class="bi">print</span>(now)  <span class="cm"># 2026-04-13 20:30:00.123456</span>
<span class="bi">print</span>(now.strftime(<span class="str">"%B %d, %Y %I:%M %p"</span>))  <span class="cm"># April 13, 2026 08:30 PM</span>

<span class="cm"># Date arithmetic</span>
tomorrow = date.today() + timedelta(days=<span class="num">1</span>)
next_week = date.today() + timedelta(weeks=<span class="num">1</span>)

<span class="cm"># Parsing strings to dates</span>
birthday = datetime.strptime(<span class="str">"1995-06-15"</span>, <span class="str">"%Y-%m-%d"</span>)
age = (datetime.now() - birthday).days // <span class="num">365</span>
<span class="bi">print</span>(<span class="str">f"Age: </span>{age}<span class="str"> years"</span>)</code></pre>
</div>

<h2>re — Regular Expressions</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">regex_demo.py</span></div>
    <pre class="code-body"><code><span class="kw">import</span> re

<span class="cm"># Find patterns</span>
text = <span class="str">"Contact: alice@mail.com or bob@company.org"</span>
emails = re.findall(<span class="str">r'[\\w.]+@[\\w.]+\\.\\w+'</span>, text)
<span class="bi">print</span>(emails)  <span class="cm"># ['alice@mail.com', 'bob@company.org']</span>

<span class="cm"># Validate patterns</span>
phone = <span class="str">"123-456-7890"</span>
<span class="kw">if</span> re.match(<span class="str">r'^\\d{3}-\\d{3}-\\d{4}$'</span>, phone):
    <span class="bi">print</span>(<span class="str">"Valid phone number"</span>)

<span class="cm"># Replace patterns</span>
text = <span class="str">"Hello    World    Python"</span>
clean = re.sub(<span class="str">r'\\s+'</span>, <span class="str">' '</span>, text)
<span class="bi">print</span>(clean)  <span class="cm"># "Hello World Python"</span>

<span class="cm"># Groups</span>
match = re.search(<span class="str">r'(\\w+)@(\\w+\\.\\w+)'</span>, <span class="str">"alice@mail.com"</span>)
<span class="kw">if</span> match:
    <span class="bi">print</span>(match.group(<span class="num">1</span>))  <span class="cm"># alice</span>
    <span class="bi">print</span>(match.group(<span class="num">2</span>))  <span class="cm"># mail.com</span></code></pre>
</div>

<h2>collections — Specialized Containers</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">collections_demo.py</span></div>
    <pre class="code-body"><code><span class="kw">from</span> collections <span class="kw">import</span> Counter, defaultdict, namedtuple, deque

<span class="cm"># Counter</span>
text = <span class="str">"abracadabra"</span>
counter = Counter(text)
<span class="bi">print</span>(counter.most_common(<span class="num">3</span>))  <span class="cm"># [('a', 5), ('b', 2), ('r', 2)]</span>

<span class="cm"># defaultdict</span>
word_groups = defaultdict(<span class="bi">list</span>)
words = [<span class="str">"apple"</span>, <span class="str">"ant"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>, <span class="str">"avocado"</span>]
<span class="kw">for</span> word <span class="kw">in</span> words:
    word_groups[word[<span class="num">0</span>]].append(word)
<span class="cm"># {'a': ['apple', 'ant', 'avocado'], 'b': ['banana'], 'c': ['cherry']}</span>

<span class="cm"># namedtuple</span>
Point = namedtuple(<span class="str">'Point'</span>, [<span class="str">'x'</span>, <span class="str">'y'</span>])
p = Point(<span class="num">3</span>, <span class="num">4</span>)
<span class="bi">print</span>(p.x, p.y)  <span class="cm"># 3 4</span>

<span class="cm"># deque — double-ended queue</span>
d = deque([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>])
d.appendleft(<span class="num">0</span>)  <span class="cm"># O(1) left append</span>
d.append(<span class="num">4</span>)       <span class="cm"># O(1) right append</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Exercise 10.1: Standard Library</h4>
    </div>
    <ol>
        <li>Build a password validator using regex (min 8 chars, uppercase, lowercase, digit, special char)</li>
        <li>Create a program that calculates working days between two dates</li>
        <li>Analyze a text file for word frequency, sentence count, and average word length</li>
    </ol>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 11: TESTING & DEBUGGING
        // =============================================
        {
            id: 11,
            title: "Testing & Debugging",
            level: "advanced",
            icon: "🧪",
            description: "Learn unit testing with unittest and pytest, debugging techniques, and code quality tools.",
            lessons: [
                {
                    id: "11-1",
                    title: "Unit Testing & Debugging",
                    duration: "30 min",
                    content: `
<h1>Unit Testing & Debugging</h1>
<div class="lesson-meta">
    <span>📘 Module 11 — Testing & Debugging</span>
    <span>⏱ 30 min read</span>
    <span>🎯 Advanced</span>
</div>

<h2>Why Test?</h2>
<p>Testing ensures your code works correctly, catches bugs early, and gives you confidence to refactor. In professional software development, untested code is considered broken code.</p>

<h2>unittest — Built-in Testing Framework</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">test_calculator.py</span></div>
    <pre class="code-body"><code><span class="kw">import</span> unittest

<span class="cm"># The code to test</span>
<span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

<span class="kw">def</span> <span class="fn">divide</span>(a, b):
    <span class="kw">if</span> b == <span class="num">0</span>:
        <span class="kw">raise</span> <span class="cls">ValueError</span>(<span class="str">"Cannot divide by zero"</span>)
    <span class="kw">return</span> a / b

<span class="cm"># Test class</span>
<span class="kw">class</span> <span class="cls">TestCalculator</span>(unittest.TestCase):
    
    <span class="kw">def</span> <span class="fn">test_add_positive</span>(<span class="self">self</span>):
        <span class="self">self</span>.assertEqual(add(<span class="num">2</span>, <span class="num">3</span>), <span class="num">5</span>)
    
    <span class="kw">def</span> <span class="fn">test_add_negative</span>(<span class="self">self</span>):
        <span class="self">self</span>.assertEqual(add(-<span class="num">1</span>, -<span class="num">1</span>), -<span class="num">2</span>)
    
    <span class="kw">def</span> <span class="fn">test_add_zero</span>(<span class="self">self</span>):
        <span class="self">self</span>.assertEqual(add(<span class="num">5</span>, <span class="num">0</span>), <span class="num">5</span>)
    
    <span class="kw">def</span> <span class="fn">test_divide</span>(<span class="self">self</span>):
        <span class="self">self</span>.assertAlmostEqual(divide(<span class="num">10</span>, <span class="num">3</span>), <span class="num">3.333</span>, places=<span class="num">2</span>)
    
    <span class="kw">def</span> <span class="fn">test_divide_by_zero</span>(<span class="self">self</span>):
        <span class="kw">with</span> <span class="self">self</span>.assertRaises(<span class="cls">ValueError</span>):
            divide(<span class="num">10</span>, <span class="num">0</span>)
    
    <span class="kw">def</span> <span class="fn">setUp</span>(<span class="self">self</span>):
        <span class="str">"""Runs before each test."""</span>
        <span class="self">self</span>.data = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
    
    <span class="kw">def</span> <span class="fn">tearDown</span>(<span class="self">self</span>):
        <span class="str">"""Runs after each test."""</span>
        <span class="kw">pass</span>

<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    unittest.main()</code></pre>
</div>

<h2>pytest — Modern Testing (Third-party)</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">test_with_pytest.py</span></div>
    <pre class="code-body"><code><span class="kw">import</span> pytest

<span class="kw">def</span> <span class="fn">test_add</span>():
    <span class="kw">assert</span> add(<span class="num">2</span>, <span class="num">3</span>) == <span class="num">5</span>
    <span class="kw">assert</span> add(-<span class="num">1</span>, <span class="num">1</span>) == <span class="num">0</span>

<span class="kw">def</span> <span class="fn">test_divide_by_zero</span>():
    <span class="kw">with</span> pytest.raises(<span class="cls">ValueError</span>):
        divide(<span class="num">10</span>, <span class="num">0</span>)

<span class="cm"># Parametrized tests</span>
<span class="dec">@pytest.mark.parametrize</span>(<span class="str">"a, b, expected"</span>, [
    (<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>),
    (-<span class="num">1</span>, -<span class="num">1</span>, -<span class="num">2</span>),
    (<span class="num">0</span>, <span class="num">0</span>, <span class="num">0</span>),
    (<span class="num">100</span>, -<span class="num">50</span>, <span class="num">50</span>),
])
<span class="kw">def</span> <span class="fn">test_add_parametrized</span>(a, b, expected):
    <span class="kw">assert</span> add(a, b) == expected

<span class="cm"># Run with: pytest test_with_pytest.py -v</span></code></pre>
</div>

<h2>Debugging Techniques</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">debugging.py</span></div>
    <pre class="code-body"><code><span class="cm"># 1. Print debugging</span>
<span class="bi">print</span>(<span class="str">f"DEBUG: variable = </span>{variable}<span class="str">"</span>)

<span class="cm"># 2. assert statements</span>
<span class="kw">def</span> <span class="fn">calculate_average</span>(numbers):
    <span class="kw">assert</span> <span class="bi">len</span>(numbers) > <span class="num">0</span>, <span class="str">"List cannot be empty"</span>
    <span class="kw">return</span> <span class="bi">sum</span>(numbers) / <span class="bi">len</span>(numbers)

<span class="cm"># 3. Python debugger (pdb)</span>
<span class="kw">import</span> pdb

<span class="kw">def</span> <span class="fn">buggy_function</span>(data):
    result = []
    <span class="kw">for</span> item <span class="kw">in</span> data:
        <span class="cm"># pdb.set_trace()  # Uncomment to debug</span>
        <span class="cm"># Or use: breakpoint()  (Python 3.7+)</span>
        result.append(item * <span class="num">2</span>)
    <span class="kw">return</span> result

<span class="cm"># 4. Logging (better than print)</span>
<span class="kw">import</span> logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

logger.debug(<span class="str">"Detailed information"</span>)
logger.info(<span class="str">"General information"</span>)
logger.warning(<span class="str">"Warning message"</span>)
logger.error(<span class="str">"Error occurred"</span>)
logger.critical(<span class="str">"Critical failure"</span>)</code></pre>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 12: REAL-WORLD PROJECTS
        // =============================================
        {
            id: 12,
            title: "Real-World Projects & Best Practices",
            level: "advanced",
            icon: "🚀",
            description: "Apply your knowledge to real-world projects and learn professional coding practices.",
            lessons: [
                {
                    id: "12-1",
                    title: "Project Ideas & Best Practices",
                    duration: "25 min",
                    content: `
<h1>Real-World Projects & Best Practices</h1>
<div class="lesson-meta">
    <span>📘 Module 12 — Projects & Best Practices</span>
    <span>⏱ 25 min read</span>
    <span>🎯 Advanced</span>
</div>

<h2>Python Best Practices (PEP 8 & Beyond)</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">best_practices.py</span></div>
    <pre class="code-body"><code><span class="str">"""
Best Practices in Python Development
Following PEP 8 Style Guide
"""</span>

<span class="cm"># 1. Use descriptive names</span>
<span class="cm"># Bad:</span>
x = <span class="num">5</span>
<span class="kw">def</span> <span class="fn">f</span>(a, b): <span class="kw">return</span> a + b

<span class="cm"># Good:</span>
max_retries = <span class="num">5</span>
<span class="kw">def</span> <span class="fn">calculate_total</span>(price, tax_rate):
    <span class="kw">return</span> price * (<span class="num">1</span> + tax_rate)

<span class="cm"># 2. Use type hints (Python 3.5+)</span>
<span class="kw">def</span> <span class="fn">greet</span>(name: <span class="bi">str</span>, times: <span class="bi">int</span> = <span class="num">1</span>) -> <span class="bi">str</span>:
    <span class="str">"""Return a greeting string."""</span>
    <span class="kw">return</span> (name + <span class="str">"! "</span>) * times

<span class="cm"># 3. Use docstrings</span>
<span class="kw">def</span> <span class="fn">binary_search</span>(arr: <span class="bi">list</span>, target: <span class="bi">int</span>) -> <span class="bi">int</span>:
    <span class="str">"""
    Perform binary search on a sorted list.
    
    Args:
        arr: A sorted list of integers.
        target: The value to search for.
    
    Returns:
        Index of the target, or -1 if not found.
    
    Raises:
        TypeError: If arr is not a list.
    """</span>
    left, right = <span class="num">0</span>, <span class="bi">len</span>(arr) - <span class="num">1</span>
    <span class="kw">while</span> left <= right:
        mid = (left + right) // <span class="num">2</span>
        <span class="kw">if</span> arr[mid] == target:
            <span class="kw">return</span> mid
        <span class="kw">elif</span> arr[mid] < target:
            left = mid + <span class="num">1</span>
        <span class="kw">else</span>:
            right = mid - <span class="num">1</span>
    <span class="kw">return</span> -<span class="num">1</span>

<span class="cm"># 4. Use context managers</span>
<span class="kw">from</span> contextlib <span class="kw">import</span> contextmanager

<span class="dec">@contextmanager</span>
<span class="kw">def</span> <span class="fn">timer</span>(label):
    <span class="kw">import</span> time
    start = time.time()
    <span class="kw">yield</span>
    <span class="bi">print</span>(<span class="str">f"</span>{label}<span class="str">: </span>{time.time() - start:<span class="num">.3f</span>}<span class="str">s"</span>)

<span class="kw">with</span> timer(<span class="str">"Processing"</span>):
    data = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1000000</span>)]</code></pre>
</div>

<h2>Project Ideas (Beginner to Advanced)</h2>
<table>
    <thead>
        <tr><th>Level</th><th>Project</th><th>Key Skills</th></tr>
    </thead>
    <tbody>
        <tr><td>🟢 Beginner</td><td>Password Generator</td><td>Strings, random, functions</td></tr>
        <tr><td>🟢 Beginner</td><td>Number Guessing Game</td><td>Loops, conditionals, input</td></tr>
        <tr><td>🟢 Beginner</td><td>Simple Calculator</td><td>Functions, error handling</td></tr>
        <tr><td>🟡 Intermediate</td><td>To-Do List with File Storage</td><td>File I/O, JSON, CRUD</td></tr>
        <tr><td>🟡 Intermediate</td><td>Web Scraper</td><td>requests, BeautifulSoup, data extraction</td></tr>
        <tr><td>🟡 Intermediate</td><td>Student Grade Manager</td><td>OOP, file handling, data analysis</td></tr>
        <tr><td>🔴 Advanced</td><td>REST API with Flask/FastAPI</td><td>Web development, databases, authentication</td></tr>
        <tr><td>🔴 Advanced</td><td>Data Dashboard</td><td>Pandas, Matplotlib, data visualization</td></tr>
        <tr><td>🔴 Advanced</td><td>Chat Application</td><td>Sockets, threading, networking</td></tr>
        <tr><td>🔴 Advanced</td><td>Machine Learning Model</td><td>scikit-learn, data preprocessing, evaluation</td></tr>
    </tbody>
</table>

<h2>Example Project: Password Generator</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">password_generator.py</span></div>
    <pre class="code-body"><code><span class="str">"""
Secure Password Generator
Generates strong, random passwords.
"""</span>
<span class="kw">import</span> string
<span class="kw">import</span> secrets

<span class="kw">def</span> <span class="fn">generate_password</span>(
    length: <span class="bi">int</span> = <span class="num">16</span>,
    uppercase: <span class="bi">bool</span> = <span class="bool">True</span>,
    lowercase: <span class="bi">bool</span> = <span class="bool">True</span>,
    digits: <span class="bi">bool</span> = <span class="bool">True</span>,
    symbols: <span class="bi">bool</span> = <span class="bool">True</span>
) -> <span class="bi">str</span>:
    <span class="str">"""Generate a secure random password."""</span>
    chars = <span class="str">""</span>
    required = []
    
    <span class="kw">if</span> uppercase:
        chars += string.ascii_uppercase
        required.append(secrets.choice(string.ascii_uppercase))
    <span class="kw">if</span> lowercase:
        chars += string.ascii_lowercase
        required.append(secrets.choice(string.ascii_lowercase))
    <span class="kw">if</span> digits:
        chars += string.digits
        required.append(secrets.choice(string.digits))
    <span class="kw">if</span> symbols:
        chars += string.punctuation
        required.append(secrets.choice(string.punctuation))
    
    <span class="kw">if</span> <span class="kw">not</span> chars:
        <span class="kw">raise</span> <span class="cls">ValueError</span>(<span class="str">"At least one character type required"</span>)
    
    remaining = length - <span class="bi">len</span>(required)
    password = required + [secrets.choice(chars) <span class="kw">for</span> _ <span class="kw">in</span> <span class="bi">range</span>(remaining)]
    secrets.SystemRandom().shuffle(password)
    
    <span class="kw">return</span> <span class="str">""</span>.join(password)

<span class="cm"># Generate some passwords</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="bi">range</span>(<span class="num">5</span>):
    <span class="bi">print</span>(generate_password(length=<span class="num">20</span>))</code></pre>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 What's Next?</div>
    <p>After completing this course, explore specialized areas: <strong>Web Development</strong> (Django, Flask, FastAPI), <strong>Data Science</strong> (Pandas, NumPy, Matplotlib), <strong>Machine Learning</strong> (scikit-learn, TensorFlow, PyTorch), or <strong>DevOps</strong> (Docker, CI/CD, cloud platforms). Python opens doors to all of these!</p>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Final Project Challenge</h4>
    </div>
    <ol>
        <li>Choose one of the project ideas above and build it from scratch</li>
        <li>Write unit tests for your project</li>
        <li>Add proper error handling and logging</li>
        <li>Write clean, documented code following PEP 8</li>
        <li>Push your project to GitHub as part of your portfolio</li>
    </ol>
</div>

<h2>🎓 Congratulations!</h2>
<p>If you've made it through all 12 modules, you've covered the equivalent of a university-level Python programming course. You now have a solid foundation in:</p>
<ul>
    <li>Python syntax, data types, and control flow</li>
    <li>Functions, scope, closures, and decorators</li>
    <li>Object-Oriented Programming</li>
    <li>File handling and exception management</li>
    <li>Modules, packages, and virtual environments</li>
    <li>The Python standard library</li>
    <li>Testing and debugging</li>
    <li>Real-world best practices</li>
</ul>
<p><strong>Keep coding, keep building, and keep learning! 🐍🚀</strong></p>
`
                }
            ]
        }
    ]
};
