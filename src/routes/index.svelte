<script>
    let projectName = '';
    let files;
    let composerJson;
    let composerLock;
    let errors = {
        projectName: false,
        composerFiles: false
    };

    $: if (files) {
        // Note that `files` is of type `FileList`, not an Array:
        // https://developer.mozilla.org/en-US/docs/Web/API/FileList
        console.log(files);

        for (const file of files) {
            console.log(`${file.name}: ${file.size} bytes`);
        }
    }

    function handleClick() {
        if (projectName === '') {
            errors.projectName = true;
        }

        if (files === undefined) {
            errors.composerFiles = true;
        }

        console.log(errors);
    }


</script>

<h2>New project analysis</h2>
<form>
    <div class="form-group">
        <label for="projectName">Your project name</label>
        <input bind:value={projectName} type="text" class="form-control" id="projectName" required>
    </div>
    <div class="form-group">
        <label for="composerJson">Select your <code>composer.json</code> and <code>composer.lock</code> files</label>
        <input
            bind:files
            type="file"
            class="form-control-file"
            id="composerJson"
            required="true"
            multiple="true" 
            accept=".json, .lock"
        >
    </div>
</form>
<button
    type="button"
    class="btn btn-primary"
    on:click|once={handleClick}
>GO</button>
