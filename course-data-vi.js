// ============================================
// PYTHON MASTERY ACADEMY — Dữ liệu Khóa học Tiếng Việt
// Chương trình Python toàn diện cấp đại học
// ============================================

const COURSE_DATA_VI = {
    title: "Học viện Python Mastery",
    version: "2026",
    modules: [
        // =============================================
        // MODULE 1: GIỚI THIỆU & CÀI ĐẶT
        // =============================================
        {
            id: 1,
            title: "Giới thiệu Python & Cài đặt",
            level: "beginner",
            icon: "🚀",
            description: "Hiểu Python là gì, tại sao nó quan trọng, và thiết lập môi trường phát triển của bạn.",
            lessons: [
                {
                    id: "1-1",
                    title: "Python là gì?",
                    duration: "15 phút",
                    content: `
<h1>Python là gì?</h1>
<div class="lesson-meta">
    <span>📘 Module 1 — Giới thiệu</span>
    <span>⏱ 15 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Lịch sử ngắn gọn</h2>
<p><strong>Guido van Rossum</strong> đã tạo ra Python và phát hành lần đầu vào năm 1991. Được đặt tên theo nhóm hài kịch Anh Monty Python, ngôn ngữ này được thiết kế để đơn giản, dễ đọc và thú vị khi sử dụng. Ngày nay, Python là một trong những ngôn ngữ lập trình phổ biến nhất thế giới.</p>

<p>Python là một <strong>ngôn ngữ lập trình bậc cao, thông dịch, đa mục đích</strong>. Hãy phân tích ý nghĩa:</p>
<ul>
    <li><strong>Bậc cao:</strong> Python trừu tượng hóa các chi tiết phức tạp như quản lý bộ nhớ, giúp viết và hiểu code dễ dàng hơn.</li>
    <li><strong>Thông dịch:</strong> Code Python được thực thi từng dòng bởi trình thông dịch, thay vì biên dịch sang mã máy trước. Điều này giúp phát triển và gỡ lỗi nhanh hơn.</li>
    <li><strong>Đa mục đích:</strong> Python có thể được sử dụng cho hầu hết mọi thứ — phát triển web, khoa học dữ liệu, AI, tự động hóa, scripting, phát triển game, và nhiều hơn nữa.</li>
</ul>

<h2>Tại sao nên học Python?</h2>
<p>Python liên tục xếp hạng trong số các ngôn ngữ lập trình phổ biến nhất. Đây là lý do:</p>

<table>
    <thead>
        <tr><th>Ưu điểm</th><th>Mô tả</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>Dễ học</strong></td><td>Cú pháp sạch sẽ, đọc gần như tiếng Anh</td></tr>
        <tr><td><strong>Đa năng</strong></td><td>Dùng trong web, khoa học dữ liệu, AI, tự động hóa, v.v.</td></tr>
        <tr><td><strong>Cộng đồng lớn</strong></td><td>Hàng triệu lập trình viên, tài liệu phong phú, vô số thư viện</td></tr>
        <tr><td><strong>Nhu cầu cao</strong></td><td>Một trong những kỹ năng được tìm kiếm nhiều nhất trong ngành công nghệ</td></tr>
        <tr><td><strong>Đa nền tảng</strong></td><td>Chạy trên Windows, macOS, Linux, và nhiều hơn</td></tr>
        <tr><td><strong>Hệ sinh thái phong phú</strong></td><td>Hơn 400.000+ gói trên PyPI</td></tr>
    </tbody>
</table>

<h2>Triết lý Python: Zen of Python</h2>
<p>Python có một triết lý hướng dẫn được ghi trong "The Zen of Python" (thử gõ <code>import this</code> trong Python). Các nguyên tắc chính bao gồm:</p>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">zen_of_python.py</span></div>
    <pre class="code-body"><code><span class="cm"># Gõ lệnh này trong Python để xem Zen of Python đầy đủ</span>
<span class="kw">import</span> this

<span class="cm"># Các nguyên tắc chính:</span>
<span class="cm"># Đẹp tốt hơn xấu. (Beautiful is better than ugly.)</span>
<span class="cm"># Rõ ràng tốt hơn ngầm hiểu. (Explicit is better than implicit.)</span>
<span class="cm"># Đơn giản tốt hơn phức tạp. (Simple is better than complex.)</span>
<span class="cm"># Dễ đọc rất quan trọng. (Readability counts.)</span></code></pre>
</div>

<h2>Python được sử dụng ở đâu?</h2>
<ul>
    <li><strong>Phát triển Web:</strong> Django, Flask, FastAPI</li>
    <li><strong>Khoa học Dữ liệu & Phân tích:</strong> Pandas, NumPy, Matplotlib</li>
    <li><strong>Machine Learning & AI:</strong> TensorFlow, PyTorch, scikit-learn</li>
    <li><strong>Tự động hóa & Scripting:</strong> Tự động hóa tác vụ lặp lại, quản trị hệ thống</li>
    <li><strong>Phát triển Game:</strong> Pygame</li>
    <li><strong>Ứng dụng Desktop:</strong> Tkinter, PyQt</li>
    <li><strong>DevOps & Cloud:</strong> AWS SDK, tự động hóa cơ sở hạ tầng</li>
</ul>

<div class="info-box tip">
    <div class="info-box-title">💡 Bạn có biết?</div>
    <p>Các công ty như Google, Netflix, Instagram, Spotify, Dropbox và NASA đều sử dụng Python rộng rãi trong hệ thống công nghệ của họ.</p>
</div>
`
                },
                {
                    id: "1-2",
                    title: "Cài đặt Python",
                    duration: "20 phút",
                    content: `
<h1>Cài đặt Python</h1>
<div class="lesson-meta">
    <span>📘 Module 1 — Giới thiệu</span>
    <span>⏱ 20 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Bước 1: Tải Python</h2>
<p>Truy cập trang web Python chính thức tại <strong>python.org/downloads</strong> và tải phiên bản Python 3 mới nhất. Tính đến năm 2026, Python 3.12+ được khuyến nghị.</p>

<div class="info-box important">
    <div class="info-box-title">⚠️ Quan trọng</div>
    <p>Luôn sử dụng <strong>Python 3</strong>. Python 2 đã hết hỗ trợ vào ngày 1 tháng 1 năm 2020 và không nên được sử dụng cho dự án mới.</p>
</div>

<h2>Bước 2: Cài đặt trên các nền tảng khác nhau</h2>

<h3>Windows</h3>
<ol>
    <li>Tải trình cài đặt Windows từ python.org</li>
    <li><strong>Đánh dấu "Add Python to PATH"</strong> khi cài đặt — điều này rất quan trọng!</li>
    <li>Nhấn "Install Now" để cài đặt mặc định</li>
    <li>Kiểm tra bằng cách mở Command Prompt và gõ:</li>
</ol>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">terminal</span></div>
    <pre class="code-body"><code>python --version
<span class="cm"># Kết quả: Python 3.12.x</span>

pip --version
<span class="cm"># Kết quả: pip 24.x from ...</span></code></pre>
</div>

<h3>macOS</h3>
<ol>
    <li>macOS được cài sẵn Python 2, nhưng bạn cần Python 3</li>
    <li>Cài qua Homebrew (khuyến nghị): <code>brew install python</code></li>
    <li>Hoặc tải từ python.org</li>
    <li>Kiểm tra: <code>python3 --version</code></li>
</ol>

<h3>Linux</h3>
<ol>
    <li>Hầu hết các bản phân phối Linux đều được cài sẵn Python 3</li>
    <li>Nếu chưa có: <code>sudo apt install python3 python3-pip</code> (Ubuntu/Debian)</li>
    <li>Kiểm tra: <code>python3 --version</code></li>
</ol>

<h2>Bước 3: Chọn IDE hoặc Trình soạn thảo</h2>
<p>Một trình soạn thảo code tốt giúp lập trình thú vị hơn nhiều. Dưới đây là các khuyến nghị hàng đầu:</p>

<table>
    <thead>
        <tr><th>Trình soạn thảo</th><th>Phù hợp cho</th><th>Tính năng chính</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>VS Code</strong></td><td>Phát triển tổng quát</td><td>Miễn phí, extensions, terminal tích hợp, hỗ trợ Git</td></tr>
        <tr><td><strong>PyCharm</strong></td><td>Phát triển Python chuyên nghiệp</td><td>Debug nâng cao, refactoring, công cụ tích hợp</td></tr>
        <tr><td><strong>Jupyter Notebook</strong></td><td>Khoa học dữ liệu, học tập</td><td>Tương tác, output inline, hỗ trợ markdown</td></tr>
        <tr><td><strong>IDLE</strong></td><td>Người mới bắt đầu</td><td>Đi kèm Python, giao diện đơn giản</td></tr>
    </tbody>
</table>

<div class="info-box tip">
    <div class="info-box-title">💡 Khuyến nghị</div>
    <p>Cho khóa học này, chúng tôi khuyến nghị <strong>VS Code</strong> với extension Python. Nó miễn phí, mạnh mẽ và được sử dụng rộng rãi trong ngành. Cài extension "Python" của Microsoft để có trải nghiệm tốt nhất.</p>
</div>

<h2>Bước 4: Chương trình Python đầu tiên</h2>
<p>Hãy kiểm tra mọi thứ hoạt động bằng cách chạy chương trình Python đầu tiên của bạn:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">hello.py</span></div>
    <pre class="code-body"><code><span class="cm"># Chương trình Python đầu tiên của tôi!</span>
<span class="bi">print</span>(<span class="str">"Xin chào, Thế giới!"</span>)
<span class="bi">print</span>(<span class="str">"Chào mừng đến với Python Mastery Academy!"</span>)

<span class="cm"># Hãy làm một phép tính đơn giản</span>
<span class="bi">print</span>(<span class="str">"2 + 3 ="</span>, <span class="num">2</span> + <span class="num">3</span>)
<span class="bi">print</span>(<span class="str">"Kiểm tra phiên bản Python hoàn tất! ✓"</span>)</code></pre>
</div>

<p>Lưu file này với tên <code>hello.py</code> và chạy từ terminal:</p>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">terminal</span></div>
    <pre class="code-body"><code>python hello.py
<span class="cm"># Kết quả:</span>
<span class="cm"># Xin chào, Thế giới!</span>
<span class="cm"># Chào mừng đến với Python Mastery Academy!</span>
<span class="cm"># 2 + 3 = 5</span>
<span class="cm"># Kiểm tra phiên bản Python hoàn tất! ✓</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Bài tập 1.1: Thiết lập Môi trường</h4>
    </div>
    <ol>
        <li>Cài đặt Python 3 trên máy tính của bạn</li>
        <li>Cài đặt VS Code và extension Python</li>
        <li>Tạo file có tên <code>hello.py</code></li>
        <li>Viết chương trình in ra tên của bạn và ngôn ngữ lập trình yêu thích</li>
        <li>Chạy chương trình và xác minh nó hoạt động</li>
    </ol>
</div>
`
                },
                {
                    id: "1-3",
                    title: "Shell Tương tác & Scripts Python",
                    duration: "15 phút",
                    content: `
<h1>Shell Tương tác & Scripts Python</h1>
<div class="lesson-meta">
    <span>📘 Module 1 — Giới thiệu</span>
    <span>⏱ 15 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Shell Tương tác Python (REPL)</h2>
<p>Python cung cấp một shell tương tác, còn được gọi là REPL (Read-Eval-Print Loop — Đọc-Thực thi-In-Lặp lại). Nó hoàn hảo cho các thí nghiệm nhanh, kiểm tra đoạn code và học tập.</p>

<p>Để khởi động shell tương tác, chỉ cần gõ <code>python</code> (hoặc <code>python3</code>) trong terminal:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">Python Shell</span></div>
    <pre class="code-body"><code>>>> <span class="bi">print</span>(<span class="str">"Xin chào từ shell!"</span>)
Xin chào từ shell!

>>> <span class="num">42</span> * <span class="num">7</span>
294

>>> name = <span class="str">"Python Academy"</span>
>>> <span class="bi">print</span>(<span class="str">f"Chào mừng đến </span>{name}<span class="str">"</span>)
Chào mừng đến Python Academy

>>> <span class="bi">exit</span>()  <span class="cm"># Để thoát shell</span></code></pre>
</div>

<h2>Scripts Python</h2>
<p>Với chương trình thực tế, bạn viết code Python trong file <code>.py</code> và chạy chúng từ terminal. Đây là cách phần mềm chuyên nghiệp được xây dựng.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">my_script.py</span></div>
    <pre class="code-body"><code><span class="cm"># Đây là một script Python</span>
<span class="cm"># Lưu file này với đuôi .py và chạy nó</span>

<span class="cm"># Biến</span>
course_name = <span class="str">"Python Mastery"</span>
version = <span class="num">3.12</span>

<span class="cm"># Xuất kết quả</span>
<span class="bi">print</span>(<span class="str">f"Khóa học: </span>{course_name}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Phiên bản Python: </span>{version}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">"Hãy bắt đầu học!"</span>)</code></pre>
</div>

<h2>Chú thích (Comments) trong Python</h2>
<p>Chú thích là các ghi chú trong code mà Python bỏ qua. Chúng giúp giải thích code cho người khác (và cho chính bạn trong tương lai).</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">comments.py</span></div>
    <pre class="code-body"><code><span class="cm"># Đây là chú thích một dòng</span>

<span class="cm"># Bạn có thể dùng chú thích để giải thích logic phức tạp</span>
total = <span class="num">100</span> * <span class="num">0.08</span>  <span class="cm"># Tính thuế 8%</span>

<span class="str">"""
Đây là chú thích nhiều dòng (docstring).
Nó có thể kéo dài nhiều dòng.
Thường được dùng ở đầu hàm để mô tả chúng.
"""</span>

<span class="bi">print</span>(total)  <span class="cm"># Kết quả: 8.0</span></code></pre>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 Thực hành tốt</div>
    <p>Viết chú thích để giải thích <em>tại sao</em> bạn làm điều gì đó, không phải <em>cái gì</em> bạn đang làm. Bản thân code nên đủ dễ đọc để hiểu nó làm gì.</p>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 2: BIẾN & KIỂU DỮ LIỆU
        // =============================================
        {
            id: 2,
            title: "Biến & Kiểu dữ liệu",
            level: "beginner",
            icon: "📦",
            description: "Tìm hiểu về biến, số, chuỗi, boolean và chuyển đổi kiểu — nền tảng của mọi chương trình.",
            lessons: [
                {
                    id: "2-1",
                    title: "Biến & Phép gán",
                    duration: "20 phút",
                    content: `
<h1>Biến & Phép gán</h1>
<div class="lesson-meta">
    <span>📘 Module 2 — Biến & Kiểu dữ liệu</span>
    <span>⏱ 20 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Biến là gì?</h2>
<p>Biến là một vùng chứa có tên lưu trữ dữ liệu trong bộ nhớ. Hãy nghĩ nó như một hộp có nhãn, nơi bạn có thể đặt một giá trị và lấy lại sau.</p>

<p>Trong Python, bạn tạo biến đơn giản bằng cách gán giá trị cho một tên sử dụng toán tử <code>=</code>:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">variables.py</span></div>
    <pre class="code-body"><code><span class="cm"># Tạo biến</span>
name = <span class="str">"Alice"</span>
age = <span class="num">25</span>
height = <span class="num">5.7</span>
is_student = <span class="bool">True</span>

<span class="cm"># Sử dụng biến</span>
<span class="bi">print</span>(<span class="str">f"Tên: </span>{name}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Tuổi: </span>{age}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Chiều cao: </span>{height}<span class="str"> ft"</span>)
<span class="bi">print</span>(<span class="str">f"Sinh viên: </span>{is_student}<span class="str">"</span>)</code></pre>
</div>

<div class="info-box note">
    <div class="info-box-title">📝 Ghi chú: Kiểu động (Dynamic Typing)</div>
    <p>Python là ngôn ngữ <strong>kiểu động</strong>, nghĩa là bạn không cần khai báo kiểu của biến — Python tự phát hiện. Một biến thậm chí có thể thay đổi kiểu của nó trong runtime.</p>
</div>

<h2>Quy tắc đặt tên biến</h2>
<p>Tuân thủ các quy tắc sau khi đặt tên biến:</p>
<ul>
    <li>Phải bắt đầu bằng chữ cái (a-z, A-Z) hoặc dấu gạch dưới (_)</li>
    <li>Có thể chứa chữ cái, chữ số (0-9) và dấu gạch dưới</li>
    <li>Phân biệt hoa thường: <code>Name</code>, <code>name</code>, và <code>NAME</code> là các biến khác nhau</li>
    <li>Không thể sử dụng từ khóa Python (như <code>if</code>, <code>for</code>, <code>class</code>, v.v.)</li>
</ul>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">naming.py</span></div>
    <pre class="code-body"><code><span class="cm"># ✅ Tên biến tốt (quy ước snake_case)</span>
first_name = <span class="str">"John"</span>
total_price = <span class="num">29.99</span>
is_active = <span class="bool">True</span>
student_count = <span class="num">42</span>
MAX_RETRY = <span class="num">3</span>          <span class="cm"># Hằng số dùng CHỮ_HOA</span>

<span class="cm"># ❌ Tên biến không hợp lệ</span>
<span class="cm"># 2name = "lỗi"       # Không bắt đầu bằng số</span>
<span class="cm"># my-name = "lỗi"     # Không dùng dấu gạch ngang</span>
<span class="cm"># class = "lỗi"       # Từ khóa Python</span></code></pre>
</div>

<h2>Gán nhiều biến</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">multiple_assignment.py</span></div>
    <pre class="code-body"><code><span class="cm"># Gán nhiều biến cùng lúc</span>
x, y, z = <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>
<span class="bi">print</span>(x, y, z)  <span class="cm"># 1 2 3</span>

<span class="cm"># Gán cùng giá trị cho nhiều biến</span>
a = b = c = <span class="num">0</span>
<span class="bi">print</span>(a, b, c)  <span class="cm"># 0 0 0</span>

<span class="cm"># Hoán đổi biến (cách Pythonic)</span>
a, b = <span class="num">10</span>, <span class="num">20</span>
a, b = b, a
<span class="bi">print</span>(a, b)  <span class="cm"># 20 10</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Bài tập 2.1: Thực hành Biến</h4>
    </div>
    <ol>
        <li>Tạo các biến cho tên, tuổi, chiều cao và việc bạn có thích pizza không (boolean)</li>
        <li>In tất cả biến sử dụng f-strings</li>
        <li>Hoán đổi hai biến mà không dùng biến tạm</li>
        <li>Tạo hằng số PI và dùng nó để tính diện tích hình tròn</li>
    </ol>
</div>
`
                },
                {
                    id: "2-2",
                    title: "Số (int, float, complex)",
                    duration: "25 phút",
                    content: `
<h1>Số trong Python</h1>
<div class="lesson-meta">
    <span>📘 Module 2 — Biến & Kiểu dữ liệu</span>
    <span>⏱ 25 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Các kiểu số</h2>
<p>Python có ba kiểu số:</p>

<table>
    <thead>
        <tr><th>Kiểu</th><th>Mô tả</th><th>Ví dụ</th></tr>
    </thead>
    <tbody>
        <tr><td><code>int</code></td><td>Số nguyên</td><td><code>42</code>, <code>-17</code>, <code>0</code></td></tr>
        <tr><td><code>float</code></td><td>Số thập phân</td><td><code>3.14</code>, <code>-0.001</code>, <code>2.0</code></td></tr>
        <tr><td><code>complex</code></td><td>Số phức</td><td><code>3+4j</code>, <code>1j</code></td></tr>
    </tbody>
</table>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">numbers.py</span></div>
    <pre class="code-body"><code><span class="cm"># Số nguyên - độ chính xác không giới hạn trong Python!</span>
age = <span class="num">25</span>
big_number = <span class="num">1_000_000</span>     <span class="cm"># Dấu gạch dưới cho dễ đọc</span>
negative = -<span class="num">42</span>
binary = <span class="num">0b1010</span>           <span class="cm"># Nhị phân: 10</span>
octal = <span class="num">0o17</span>              <span class="cm"># Bát phân: 15</span>
hexadecimal = <span class="num">0xFF</span>        <span class="cm"># Thập lục phân: 255</span>

<span class="cm"># Số thập phân</span>
pi = <span class="num">3.14159</span>
temperature = -<span class="num">40.0</span>
scientific = <span class="num">1.5e10</span>       <span class="cm"># 1.5 × 10^10</span>

<span class="cm"># Số phức</span>
z = <span class="num">3</span> + <span class="num">4j</span>
<span class="bi">print</span>(z.real)    <span class="cm"># 3.0</span>
<span class="bi">print</span>(z.imag)    <span class="cm"># 4.0</span></code></pre>
</div>

<h2>Toán tử Số học</h2>
<table>
    <thead>
        <tr><th>Toán tử</th><th>Tên</th><th>Ví dụ</th><th>Kết quả</th></tr>
    </thead>
    <tbody>
        <tr><td><code>+</code></td><td>Cộng</td><td><code>5 + 3</code></td><td><code>8</code></td></tr>
        <tr><td><code>-</code></td><td>Trừ</td><td><code>10 - 4</code></td><td><code>6</code></td></tr>
        <tr><td><code>*</code></td><td>Nhân</td><td><code>7 * 3</code></td><td><code>21</code></td></tr>
        <tr><td><code>/</code></td><td>Chia</td><td><code>15 / 4</code></td><td><code>3.75</code></td></tr>
        <tr><td><code>//</code></td><td>Chia lấy phần nguyên</td><td><code>15 // 4</code></td><td><code>3</code></td></tr>
        <tr><td><code>%</code></td><td>Chia lấy dư</td><td><code>15 % 4</code></td><td><code>3</code></td></tr>
        <tr><td><code>**</code></td><td>Lũy thừa</td><td><code>2 ** 10</code></td><td><code>1024</code></td></tr>
    </tbody>
</table>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">arithmetic.py</span></div>
    <pre class="code-body"><code><span class="cm"># Toán học cơ bản</span>
<span class="bi">print</span>(<span class="num">10</span> + <span class="num">3</span>)    <span class="cm"># 13</span>
<span class="bi">print</span>(<span class="num">10</span> - <span class="num">3</span>)    <span class="cm"># 7</span>
<span class="bi">print</span>(<span class="num">10</span> * <span class="num">3</span>)    <span class="cm"># 30</span>
<span class="bi">print</span>(<span class="num">10</span> / <span class="num">3</span>)    <span class="cm"># 3.3333...</span>
<span class="bi">print</span>(<span class="num">10</span> // <span class="num">3</span>)   <span class="cm"># 3 (chia lấy phần nguyên)</span>
<span class="bi">print</span>(<span class="num">10</span> % <span class="num">3</span>)    <span class="cm"># 1 (phần dư)</span>
<span class="bi">print</span>(<span class="num">2</span> ** <span class="num">8</span>)    <span class="cm"># 256 (lũy thừa)</span>

<span class="cm"># Toán tử gán kết hợp</span>
x = <span class="num">10</span>
x += <span class="num">5</span>    <span class="cm"># x = x + 5 → 15</span>
x -= <span class="num">3</span>    <span class="cm"># x = x - 3 → 12</span>
x *= <span class="num">2</span>    <span class="cm"># x = x * 2 → 24</span>
x /= <span class="num">4</span>    <span class="cm"># x = x / 4 → 6.0</span>

<span class="cm"># Hàm toán học tích hợp</span>
<span class="bi">print</span>(<span class="bi">abs</span>(-<span class="num">42</span>))       <span class="cm"># 42 (giá trị tuyệt đối)</span>
<span class="bi">print</span>(<span class="bi">round</span>(<span class="num">3.7</span>))     <span class="cm"># 4 (làm tròn)</span>
<span class="bi">print</span>(<span class="bi">max</span>(<span class="num">1</span>, <span class="num">5</span>, <span class="num">3</span>))    <span class="cm"># 5 (giá trị lớn nhất)</span>
<span class="bi">print</span>(<span class="bi">min</span>(<span class="num">1</span>, <span class="num">5</span>, <span class="num">3</span>))    <span class="cm"># 1 (giá trị nhỏ nhất)</span></code></pre>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ Độ chính xác Float</div>
    <p>Số thập phân có độ chính xác giới hạn. <code>0.1 + 0.2</code> cho kết quả <code>0.30000000000000004</code>, không phải <code>0.3</code>. Cho các phép tính tài chính, hãy sử dụng module <code>decimal</code>.</p>
</div>
`
                },
                {
                    id: "2-3",
                    title: "Chuỗi & Phương thức Chuỗi",
                    duration: "30 phút",
                    content: `
<h1>Chuỗi & Phương thức Chuỗi</h1>
<div class="lesson-meta">
    <span>📘 Module 2 — Biến & Kiểu dữ liệu</span>
    <span>⏱ 30 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Tạo Chuỗi</h2>
<p>Chuỗi (string) là chuỗi các ký tự. Trong Python, bạn có thể tạo chuỗi bằng dấu ngoặc đơn, ngoặc kép hoặc ngoặc ba:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">strings.py</span></div>
    <pre class="code-body"><code><span class="cm"># Các cách tạo chuỗi</span>
single = <span class="str">'Xin chào'</span>
double = <span class="str">"Xin chào"</span>
triple = <span class="str">"""Đây là chuỗi
nhiều dòng"""</span>

<span class="cm"># Ký tự đặc biệt</span>
newline = <span class="str">"Dòng 1\\nDòng 2"</span>
tab = <span class="str">"Cột1\\tCột2"</span>

<span class="cm"># Chuỗi raw (bỏ qua ký tự escape)</span>
path = <span class="str">r"C:\\Users\\folder\\file.txt"</span></code></pre>
</div>

<h2>Chỉ mục & Cắt Chuỗi</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">slicing.py</span></div>
    <pre class="code-body"><code>text = <span class="str">"Python"</span>
<span class="cm">#        P  y  t  h  o  n</span>
<span class="cm"># Index: 0  1  2  3  4  5</span>
<span class="cm"># Âm:   -6 -5 -4 -3 -2 -1</span>

<span class="cm"># Chỉ mục (lấy một ký tự)</span>
<span class="bi">print</span>(text[<span class="num">0</span>])    <span class="cm"># "P"</span>
<span class="bi">print</span>(text[-<span class="num">1</span>])   <span class="cm"># "n"</span>

<span class="cm"># Cắt chuỗi [start:stop:step]</span>
<span class="bi">print</span>(text[<span class="num">0</span>:<span class="num">3</span>])   <span class="cm"># "Pyt"</span>
<span class="bi">print</span>(text[<span class="num">2</span>:])    <span class="cm"># "thon"</span>
<span class="bi">print</span>(text[:<span class="num">4</span>])    <span class="cm"># "Pyth"</span>
<span class="bi">print</span>(text[::-<span class="num">1</span>])  <span class="cm"># "nohtyP" (đảo ngược)</span></code></pre>
</div>

<h2>Định dạng Chuỗi (f-strings)</h2>
<p>F-strings là cách hiện đại và được ưa thích nhất để định dạng chuỗi trong Python:</p>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">fstrings.py</span></div>
    <pre class="code-body"><code>name = <span class="str">"Alice"</span>
age = <span class="num">30</span>
price = <span class="num">49.99</span>

<span class="cm"># F-string cơ bản</span>
<span class="bi">print</span>(<span class="str">f"Tên: </span>{name}<span class="str">, Tuổi: </span>{age}<span class="str">"</span>)

<span class="cm"># Biểu thức trong f-strings</span>
<span class="bi">print</span>(<span class="str">f"Năm sau: </span>{age + <span class="num">1</span>}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Chữ hoa: </span>{name.upper()}<span class="str">"</span>)

<span class="cm"># Định dạng số</span>
<span class="bi">print</span>(<span class="str">f"Giá: </span>{price:<span class="num">.2f</span>}<span class="str"> VNĐ"</span>)
<span class="bi">print</span>(<span class="str">f"Lớn: </span>{<span class="num">1000000</span>:<span class="num">,</span>}<span class="str">"</span>)
<span class="bi">print</span>(<span class="str">f"Phần trăm: </span>{<span class="num">0.856</span>:<span class="num">.1%</span>}<span class="str">"</span>)</code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Bài tập 2.3: Làm chủ Chuỗi</h4>
    </div>
    <ol>
        <li>Viết chương trình đếm nguyên âm, phụ âm và khoảng trắng trong một câu</li>
        <li>Đảo ngược chuỗi mà không dùng [::-1]</li>
        <li>Kiểm tra xem chuỗi có phải palindrome không (đọc xuôi ngược giống nhau)</li>
        <li>Định dạng hóa đơn: căn trái tên sản phẩm, căn phải giá, với tổng ở cuối</li>
    </ol>
</div>
`
                },
                {
                    id: "2-4",
                    title: "Boolean & Chuyển đổi Kiểu",
                    duration: "15 phút",
                    content: `
<h1>Boolean & Chuyển đổi Kiểu</h1>
<div class="lesson-meta">
    <span>📘 Module 2 — Biến & Kiểu dữ liệu</span>
    <span>⏱ 15 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Giá trị Boolean</h2>
<p>Boolean biểu diễn giá trị đúng/sai: <code>True</code> hoặc <code>False</code>. Chúng là nền tảng cho việc ra quyết định trong chương trình.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">booleans.py</span></div>
    <pre class="code-body"><code><span class="cm"># Giá trị Boolean</span>
is_active = <span class="bool">True</span>
is_deleted = <span class="bool">False</span>

<span class="cm"># Toán tử so sánh trả về boolean</span>
<span class="bi">print</span>(<span class="num">5</span> > <span class="num">3</span>)     <span class="cm"># True</span>
<span class="bi">print</span>(<span class="num">5</span> == <span class="num">3</span>)    <span class="cm"># False</span>
<span class="bi">print</span>(<span class="num">5</span> != <span class="num">3</span>)    <span class="cm"># True</span>

<span class="cm"># Toán tử logic</span>
<span class="bi">print</span>(<span class="bool">True</span> <span class="kw">and</span> <span class="bool">True</span>)     <span class="cm"># True (VÀ)</span>
<span class="bi">print</span>(<span class="bool">True</span> <span class="kw">or</span> <span class="bool">False</span>)     <span class="cm"># True (HOẶC)</span>
<span class="bi">print</span>(<span class="kw">not</span> <span class="bool">True</span>)           <span class="cm"># False (PHỦ ĐỊNH)</span>

<span class="cm"># Giá trị Truthy và Falsy</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="num">0</span>))        <span class="cm"># False (số 0)</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="str">""</span>))       <span class="cm"># False (chuỗi rỗng)</span>
<span class="bi">print</span>(<span class="bi">bool</span>([]))       <span class="cm"># False (list rỗng)</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="none">None</span>))     <span class="cm"># False</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="num">42</span>))       <span class="cm"># True (số khác 0)</span>
<span class="bi">print</span>(<span class="bi">bool</span>(<span class="str">"hello"</span>))  <span class="cm"># True (chuỗi không rỗng)</span></code></pre>
</div>

<h2>Chuyển đổi Kiểu (Casting)</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">type_casting.py</span></div>
    <pre class="code-body"><code><span class="cm"># Kiểm tra kiểu</span>
<span class="bi">print</span>(<span class="bi">type</span>(<span class="num">42</span>))        <span class="cm"># &lt;class 'int'&gt;</span>
<span class="bi">print</span>(<span class="bi">type</span>(<span class="num">3.14</span>))      <span class="cm"># &lt;class 'float'&gt;</span>
<span class="bi">print</span>(<span class="bi">type</span>(<span class="str">"hello"</span>))   <span class="cm"># &lt;class 'str'&gt;</span>

<span class="cm"># Chuyển đổi kiểu</span>
<span class="bi">print</span>(<span class="bi">int</span>(<span class="str">"42"</span>))       <span class="cm"># 42 (chuỗi → số nguyên)</span>
<span class="bi">print</span>(<span class="bi">int</span>(<span class="num">3.9</span>))        <span class="cm"># 3 (cắt bỏ, không làm tròn)</span>
<span class="bi">print</span>(<span class="bi">float</span>(<span class="str">"3.14"</span>))   <span class="cm"># 3.14 (chuỗi → số thực)</span>
<span class="bi">print</span>(<span class="bi">str</span>(<span class="num">42</span>))         <span class="cm"># "42" (số → chuỗi)</span></code></pre>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ Lỗi thường gặp</div>
    <p>Chuyển đổi chuỗi không hợp lệ sang số sẽ gây lỗi <code>ValueError</code>: <code>int("hello")</code> sẽ crash. Luôn kiểm tra dữ liệu đầu vào trước khi chuyển đổi.</p>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 3: LUỒNG ĐIỀU KHIỂN
        // =============================================
        {
            id: 3,
            title: "Luồng điều khiển",
            level: "beginner",
            icon: "🔀",
            description: "Làm chủ câu lệnh if/elif/else, vòng lặp for, while, và các công cụ break, continue, pass.",
            lessons: [
                {
                    id: "3-1",
                    title: "Câu lệnh Điều kiện (if/elif/else)",
                    duration: "25 phút",
                    content: `
<h1>Câu lệnh Điều kiện</h1>
<div class="lesson-meta">
    <span>📘 Module 3 — Luồng điều khiển</span>
    <span>⏱ 25 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Câu lệnh if</h2>
<p>Câu lệnh điều kiện cho phép chương trình đưa ra quyết định dựa trên điều kiện. Python sử dụng <strong>thụt lề</strong> (thường 4 dấu cách) để xác định khối code.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">conditionals.py</span></div>
    <pre class="code-body"><code><span class="cm"># Câu lệnh if đơn giản</span>
age = <span class="num">18</span>

<span class="kw">if</span> age >= <span class="num">18</span>:
    <span class="bi">print</span>(<span class="str">"Bạn đã trưởng thành"</span>)

<span class="cm"># if-else</span>
temperature = <span class="num">35</span>

<span class="kw">if</span> temperature > <span class="num">30</span>:
    <span class="bi">print</span>(<span class="str">"Trời nóng quá! 🔥"</span>)
<span class="kw">else</span>:
    <span class="bi">print</span>(<span class="str">"Thời tiết dễ chịu 😊"</span>)

<span class="cm"># if-elif-else (nhiều điều kiện)</span>
score = <span class="num">85</span>

<span class="kw">if</span> score >= <span class="num">90</span>:
    grade = <span class="str">"A - Xuất sắc"</span>
<span class="kw">elif</span> score >= <span class="num">80</span>:
    grade = <span class="str">"B - Giỏi"</span>
<span class="kw">elif</span> score >= <span class="num">70</span>:
    grade = <span class="str">"C - Khá"</span>
<span class="kw">elif</span> score >= <span class="num">60</span>:
    grade = <span class="str">"D - Trung bình"</span>
<span class="kw">else</span>:
    grade = <span class="str">"F - Không đạt"</span>

<span class="bi">print</span>(<span class="str">f"Điểm: </span>{score}<span class="str"> → Xếp loại: </span>{grade}<span class="str">"</span>)</code></pre>
</div>

<h2>Toán tử ba ngôi (Ternary)</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">ternary.py</span></div>
    <pre class="code-body"><code><span class="cm"># Cú pháp: giá_trị_đúng if điều_kiện else giá_trị_sai</span>
age = <span class="num">20</span>
status = <span class="str">"trưởng thành"</span> <span class="kw">if</span> age >= <span class="num">18</span> <span class="kw">else</span> <span class="str">"vị thành niên"</span>
<span class="bi">print</span>(status)  <span class="cm"># "trưởng thành"</span></code></pre>
</div>

<div class="exercise-box">
    <div class="exercise-box-header">
        <div class="exercise-icon">🏋️</div>
        <h4>Bài tập 3.1: Ra quyết định</h4>
    </div>
    <ol>
        <li>Viết chương trình xác định một năm có phải năm nhuận không</li>
        <li>Tạo máy tính đơn giản nhận hai số và phép toán (+, -, *, /) rồi tính kết quả</li>
        <li>Viết chương trình phân loại chỉ số BMI (thiếu cân, bình thường, thừa cân, béo phì)</li>
    </ol>
</div>
`
                },
                {
                    id: "3-2",
                    title: "Vòng lặp (for & while)",
                    duration: "30 phút",
                    content: `
<h1>Vòng lặp trong Python</h1>
<div class="lesson-meta">
    <span>📘 Module 3 — Luồng điều khiển</span>
    <span>⏱ 30 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Vòng lặp for</h2>
<p>Vòng lặp for duyệt qua một chuỗi (list, string, range, v.v.):</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">for_loops.py</span></div>
    <pre class="code-body"><code><span class="cm"># Duyệt qua một list</span>
fruits = [<span class="str">"táo"</span>, <span class="str">"chuối"</span>, <span class="str">"cherry"</span>]
<span class="kw">for</span> fruit <span class="kw">in</span> fruits:
    <span class="bi">print</span>(<span class="str">f"Tôi thích </span>{fruit}<span class="str">"</span>)

<span class="cm"># Sử dụng range()</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="bi">range</span>(<span class="num">5</span>):
    <span class="bi">print</span>(i)  <span class="cm"># 0, 1, 2, 3, 4</span>

<span class="cm"># enumerate() — lấy chỉ số và giá trị</span>
colors = [<span class="str">"đỏ"</span>, <span class="str">"xanh lá"</span>, <span class="str">"xanh dương"</span>]
<span class="kw">for</span> index, color <span class="kw">in</span> <span class="bi">enumerate</span>(colors):
    <span class="bi">print</span>(<span class="str">f"</span>{index}<span class="str">: </span>{color}<span class="str">"</span>)

<span class="cm"># zip() — duyệt nhiều chuỗi cùng lúc</span>
names = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>]
ages = [<span class="num">25</span>, <span class="num">30</span>]
<span class="kw">for</span> name, age <span class="kw">in</span> <span class="bi">zip</span>(names, ages):
    <span class="bi">print</span>(<span class="str">f"</span>{name}<span class="str"> </span>{age}<span class="str"> tuổi"</span>)</code></pre>
</div>

<h2>Vòng lặp while</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">while_loops.py</span></div>
    <pre class="code-body"><code><span class="cm"># Vòng lặp while cơ bản</span>
count = <span class="num">0</span>
<span class="kw">while</span> count < <span class="num">5</span>:
    <span class="bi">print</span>(<span class="str">f"Đếm: </span>{count}<span class="str">"</span>)
    count += <span class="num">1</span>

<span class="cm"># Đếm ngược</span>
countdown = <span class="num">10</span>
<span class="kw">while</span> countdown > <span class="num">0</span>:
    <span class="bi">print</span>(countdown, end=<span class="str">" "</span>)
    countdown -= <span class="num">1</span>
<span class="bi">print</span>(<span class="str">"🚀 Phóng!"</span>)</code></pre>
</div>

<h2>Điều khiển vòng lặp: break, continue</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">loop_control.py</span></div>
    <pre class="code-body"><code><span class="cm"># break — thoát vòng lặp ngay lập tức</span>
<span class="kw">for</span> num <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1</span>, <span class="num">100</span>):
    <span class="kw">if</span> num == <span class="num">5</span>:
        <span class="kw">break</span>
    <span class="bi">print</span>(num)  <span class="cm"># 1, 2, 3, 4</span>

<span class="cm"># continue — bỏ qua, đến lần lặp tiếp theo</span>
<span class="kw">for</span> num <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1</span>, <span class="num">11</span>):
    <span class="kw">if</span> num % <span class="num">2</span> == <span class="num">0</span>:
        <span class="kw">continue</span>
    <span class="bi">print</span>(num)  <span class="cm"># 1, 3, 5, 7, 9 (chỉ số lẻ)</span>

<span class="cm"># Vòng lặp lồng nhau — in hình tam giác</span>
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
        <h4>Bài tập 3.2: Thực hành Vòng lặp</h4>
    </div>
    <ol>
        <li>In bảng cửu chương (1-10) sử dụng vòng lặp lồng nhau</li>
        <li>Viết chương trình tìm tất cả số nguyên tố đến 100</li>
        <li>Tạo trò chơi đoán số sử dụng vòng lặp while</li>
        <li>Tính giai thừa bằng cả vòng lặp for và while</li>
    </ol>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 4: CẤU TRÚC DỮ LIỆU
        // =============================================
        {
            id: 4,
            title: "Cấu trúc Dữ liệu",
            level: "beginner",
            icon: "🗂️",
            description: "Làm chủ cấu trúc dữ liệu tích hợp: lists, tuples, dictionaries và sets.",
            lessons: [
                {
                    id: "4-1",
                    title: "Lists — Tạo, Chỉ mục & Cắt",
                    duration: "25 phút",
                    content: `
<h1>Lists trong Python</h1>
<div class="lesson-meta">
    <span>📘 Module 4 — Cấu trúc Dữ liệu</span>
    <span>⏱ 25 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>List là gì?</h2>
<p>List là một tập hợp <strong>có thứ tự, có thể thay đổi</strong> (mutable) chứa các phần tử thuộc bất kỳ kiểu nào. List là một trong những cấu trúc dữ liệu linh hoạt nhất trong Python.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">lists.py</span></div>
    <pre class="code-body"><code><span class="cm"># Tạo lists</span>
numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
names = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>, <span class="str">"Charlie"</span>]
mixed = [<span class="num">1</span>, <span class="str">"hello"</span>, <span class="num">3.14</span>, <span class="bool">True</span>, <span class="none">None</span>]

<span class="cm"># Các phương thức list quan trọng</span>
fruits = [<span class="str">"táo"</span>, <span class="str">"chuối"</span>]
fruits.append(<span class="str">"cherry"</span>)          <span class="cm"># Thêm vào cuối</span>
fruits.insert(<span class="num">1</span>, <span class="str">"cam"</span>)         <span class="cm"># Chèn tại vị trí</span>
fruits.remove(<span class="str">"chuối"</span>)           <span class="cm"># Xóa theo giá trị</span>
popped = fruits.pop()             <span class="cm"># Xóa & trả về phần tử cuối</span>

<span class="cm"># Sắp xếp</span>
nums = [<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">9</span>]
nums.sort()                <span class="cm"># Sắp xếp tăng dần</span>
nums.sort(reverse=<span class="bool">True</span>)   <span class="cm"># Sắp xếp giảm dần</span></code></pre>
</div>

<h2>List Comprehensions</h2>
<p>List comprehensions là cách ngắn gọn, Pythonic để tạo lists:</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">comprehensions.py</span></div>
    <pre class="code-body"><code><span class="cm"># Cơ bản: [biểu_thức for phần_tử in iterable]</span>
squares = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">10</span>)]
<span class="bi">print</span>(squares)  <span class="cm"># [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</span>

<span class="cm"># Có điều kiện</span>
evens = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">20</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]
<span class="bi">print</span>(evens)  <span class="cm"># [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]</span>

<span class="cm"># Ứng dụng: làm sạch danh sách chuỗi</span>
raw = [<span class="str">"  Alice  "</span>, <span class="str">"BOB"</span>, <span class="str">"  charlie"</span>]
clean = [name.strip().title() <span class="kw">for</span> name <span class="kw">in</span> raw]
<span class="bi">print</span>(clean)  <span class="cm"># ['Alice', 'Bob', 'Charlie']</span></code></pre>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 Mẹo chuyên gia</div>
    <p>List comprehensions thường nhanh hơn so với vòng lặp for tương đương. Sử dụng chúng khi logic đủ đơn giản để đọc được trong một dòng.</p>
</div>
`
                },
                {
                    id: "4-2",
                    title: "Tuples, Dictionaries & Sets",
                    duration: "35 phút",
                    content: `
<h1>Tuples, Dictionaries & Sets</h1>
<div class="lesson-meta">
    <span>📘 Module 4 — Cấu trúc Dữ liệu</span>
    <span>⏱ 35 phút đọc</span>
    <span>🎯 Cơ bản</span>
</div>

<h2>Tuples — Chuỗi không thay đổi</h2>
<p>Tuples giống lists, nhưng <strong>không thể thay đổi</strong> (immutable) sau khi tạo. Chúng sử dụng dấu ngoặc tròn <code>()</code>.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">tuples.py</span></div>
    <pre class="code-body"><code><span class="cm"># Tạo tuples</span>
point = (<span class="num">3</span>, <span class="num">4</span>)
rgb = (<span class="num">255</span>, <span class="num">128</span>, <span class="num">0</span>)
single = (<span class="num">42</span>,)  <span class="cm"># Lưu ý dấu phẩy cho tuple 1 phần tử!</span>

<span class="cm"># Tuple unpacking (giải nén)</span>
x, y = point
<span class="bi">print</span>(x, y)  <span class="cm"># 3 4</span></code></pre>
</div>

<h2>Dictionaries — Cặp Khóa-Giá trị</h2>
<p>Dictionary lưu trữ dữ liệu dưới dạng <strong>cặp khóa-giá trị</strong>. Chúng rất nhanh cho việc tra cứu.</p>

<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">dictionaries.py</span></div>
    <pre class="code-body"><code><span class="cm"># Tạo dictionary</span>
student = {
    <span class="str">"name"</span>: <span class="str">"Alice"</span>,
    <span class="str">"age"</span>: <span class="num">20</span>,
    <span class="str">"major"</span>: <span class="str">"Khoa học Máy tính"</span>,
    <span class="str">"gpa"</span>: <span class="num">3.8</span>
}

<span class="cm"># Truy cập giá trị</span>
<span class="bi">print</span>(student[<span class="str">"name"</span>])           <span class="cm"># "Alice"</span>
<span class="bi">print</span>(student.get(<span class="str">"phone"</span>, <span class="str">"N/A"</span>))  <span class="cm"># "N/A" (mặc định)</span>

<span class="cm"># Duyệt dictionary</span>
<span class="kw">for</span> key, value <span class="kw">in</span> student.items():
    <span class="bi">print</span>(<span class="str">f"</span>{key}<span class="str">: </span>{value}<span class="str">"</span>)

<span class="cm"># Dictionary comprehension</span>
squares = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="bi">range</span>(<span class="num">6</span>)}
<span class="bi">print</span>(squares)  <span class="cm"># {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</span></code></pre>
</div>

<h2>Sets — Tập hợp Duy nhất</h2>
<div class="code-window">
    <div class="code-header"><div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="code-filename">sets.py</span></div>
    <pre class="code-body"><code><span class="cm"># Tạo sets (không thứ tự, không trùng lặp)</span>
colors = {<span class="str">"đỏ"</span>, <span class="str">"xanh lá"</span>, <span class="str">"xanh dương"</span>}

<span class="cm"># Phép toán tập hợp</span>
a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>}
b = {<span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>}

<span class="bi">print</span>(a | b)   <span class="cm"># Hợp: {1, 2, 3, 4, 5, 6}</span>
<span class="bi">print</span>(a & b)   <span class="cm"># Giao: {3, 4}</span>
<span class="bi">print</span>(a - b)   <span class="cm"># Hiệu: {1, 2}</span>

<span class="cm"># Ứng dụng: loại bỏ trùng lặp</span>
data = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">3</span>, <span class="num">4</span>]
unique = <span class="bi">list</span>(<span class="bi">set</span>(data))
<span class="bi">print</span>(unique)  <span class="cm"># [1, 2, 3, 4]</span></code></pre>
</div>

<div class="info-box note">
    <div class="info-box-title">📝 Chọn Cấu trúc Dữ liệu phù hợp</div>
    <p><strong>List:</strong> Có thứ tự, cho phép trùng lặp — dùng cho chuỗi. <strong>Tuple:</strong> Không thay đổi — dùng cho dữ liệu cố định. <strong>Dict:</strong> Cặp khóa-giá trị — dùng cho tra cứu. <strong>Set:</strong> Giá trị duy nhất — dùng cho kiểm tra thành viên.</p>
</div>
`
                }
            ]
        },

        // =============================================
        // MODULE 5-12: Titles and descriptions only (lessons keep EN code)
        // =============================================
        {
            id: 5,
            title: "Hàm (Functions)",
            level: "intermediate",
            icon: "⚡",
            description: "Định nghĩa và gọi hàm, làm việc với tham số, giá trị trả về, phạm vi biến, lambda và decorators.",
            lessons: [
                { id: "5-1", title: "Định nghĩa & Gọi Hàm", duration: "25 phút", content: null },
                { id: "5-2", title: "Phạm vi, Closures & Decorators", duration: "30 phút", content: null }
            ]
        },
        {
            id: 6,
            title: "Lập trình Hướng đối tượng (OOP)",
            level: "intermediate",
            icon: "🏗️",
            description: "Làm chủ classes, objects, kế thừa, đa hình, đóng gói và phương thức đặc biệt.",
            lessons: [
                { id: "6-1", title: "Classes & Objects", duration: "30 phút", content: null }
            ]
        },
        {
            id: 7,
            title: "Xử lý File & Ngoại lệ",
            level: "intermediate",
            icon: "📁",
            description: "Học đọc/ghi file, xử lý ngoại lệ, và làm việc với dữ liệu JSON và CSV.",
            lessons: [
                { id: "7-1", title: "File I/O & Xử lý Ngoại lệ", duration: "35 phút", content: null }
            ]
        },
        {
            id: 8,
            title: "Modules & Packages",
            level: "intermediate",
            icon: "📦",
            description: "Tổ chức code thành modules và packages, sử dụng pip, và môi trường ảo.",
            lessons: [
                { id: "8-1", title: "Modules, Packages & pip", duration: "25 phút", content: null }
            ]
        },
        {
            id: 9,
            title: "Khái niệm Python Nâng cao",
            level: "advanced",
            icon: "🔬",
            description: "Khám phá generators, iterators, context managers, metaclasses và patterns nâng cao.",
            lessons: [
                { id: "9-1", title: "Generators & Iterators", duration: "30 phút", content: null }
            ]
        },
        {
            id: 10,
            title: "Thư viện Chuẩn",
            level: "intermediate",
            icon: "📚",
            description: "Khám phá thư viện chuẩn Python: os, sys, datetime, re, collections, itertools, v.v.",
            lessons: [
                { id: "10-1", title: "Các Module Thư viện Chuẩn Thiết yếu", duration: "35 phút", content: null }
            ]
        },
        {
            id: 11,
            title: "Kiểm thử & Gỡ lỗi",
            level: "advanced",
            icon: "🧪",
            description: "Học unit testing với unittest và pytest, kỹ thuật gỡ lỗi và công cụ chất lượng code.",
            lessons: [
                { id: "11-1", title: "Unit Testing & Gỡ lỗi", duration: "30 phút", content: null }
            ]
        },
        {
            id: 12,
            title: "Dự án Thực tế & Thực hành Tốt nhất",
            level: "advanced",
            icon: "🚀",
            description: "Áp dụng kiến thức vào dự án thực tế và học các phương pháp coding chuyên nghiệp.",
            lessons: [
                { id: "12-1", title: "Ý tưởng Dự án & Thực hành Tốt nhất", duration: "25 phút", content: null }
            ]
        }
    ]
};
