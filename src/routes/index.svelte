<script>
    import { projects } from "../stores/projects";
</script>

<h2>New project analysis</h2>
<form method="post" action="/project-analyser/">
    <div class="form-group">
        <label for="composerJson">Select your <code>composer.json</code> file</label>
        <input type="file" class="form-control-file" id="composerJson" required accept=".json">
    </div>
    <div class="form-group">
        <label for="composerLock">Select your <code>composer.lock</code> file</label>
        <input type="file" class="form-control-file" id="composerLock" required accept=".lock">
    </div>
</form>
