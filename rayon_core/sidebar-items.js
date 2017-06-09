initSidebarItems({"fn":[["current_num_threads","Returns the number of threads in the current registry. If this code is executing within the Rayon thread-pool, then this will be the number of threads for the current thread-pool. Otherwise, it will be the number of threads for the global thread-pool."],["initialize","Initializes the global thread pool. This initialization is optional.  If you do not call this function, the thread pool will be automatically initialized with the default configuration. In fact, calling `initialize` is not recommended, except for in two scenarios:"],["join","The `join` function takes two closures and potentially runs them in parallel. It returns a pair of the results from those closures."],["scope","Create a \"fork-join\" scope `s` and invokes the closure with a reference to `s`. This closure can then spawn asynchronous tasks into `s`. Those tasks may run asynchronously with respect to the closure; they may themselves spawn additional tasks into `s`. When the closure returns, it will block until all tasks that have been spawned into `s` complete."]],"struct":[["Configuration","Contains the rayon thread pool configuration."],["Scope",""],["ThreadPool",""]]});